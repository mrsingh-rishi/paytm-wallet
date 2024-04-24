import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
        },
        password: { label: "Password", type: "password" },
      },
      // TODO: User credentials type from next-aut
      async authorize(credentials: any) {
        // console.log(credentials);
        // Do zod validation, OTP validation here

        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await db.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });
        if (existingUser && credentials.isSignup) {
          throw new Error("User already exists");
        }
        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }
          throw new Error("Invalid credentials");
        }

        try {
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
              name: credentials.name,
            },
          });
          await db.balance.create({
            data: {
              user: {
                connect: {
                  id: user.id,
                },
              },
              amount: 0,
              locked: 0,
            },
          });
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.number,
          };
        } catch (e: any) {
          console.error(e.message);
          throw e;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
