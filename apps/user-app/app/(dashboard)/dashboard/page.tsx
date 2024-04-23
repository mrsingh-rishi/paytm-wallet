import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation";

export default async function () {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/auth/signin");
  }
  if (!session?.user?.name) {
    redirect("/addDetails");
  }
  return <div>Dashboard Page</div>;
}
