import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";
import bcrypt from "bcrypt";
import prisma from "@repo/db/client";
import { useSession } from "next-auth/react";
export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return NextResponse.json({
      user: session.user,
    });
  }
  return NextResponse.json(
    {
      message: "You are not logged in",
    },
    {
      status: 403,
    }
  );
};

export const PUT = async (req: NextRequest) => {
  const { id, name, password, email } = await req.json();
  const existingUser = await prisma.user.findFirst({
    where: { id: Number(id) },
  });

  if (!existingUser) {
    return NextResponse.json(
      {
        message: "User not found",
      },
      {
        status: 404,
      }
    );
  }
  let hashedPassword = undefined;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name: name || existingUser.name,
      password: hashedPassword || existingUser.password,
      email: email || existingUser.email,
    },
  });

  return NextResponse.json(
    {
      message: "User updated",
      success: true,
    },
    {
      status: 200,
    }
  );
};
