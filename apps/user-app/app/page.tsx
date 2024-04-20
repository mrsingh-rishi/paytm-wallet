import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import LandingPage from "@repo/ui/landingpage";
export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  }
  // } else {
  //   redirect("/api/auth/signin");
  // }

  return (
    <LandingPage
     
    />
  );
}
