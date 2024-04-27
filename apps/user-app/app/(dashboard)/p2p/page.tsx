import { getServerSession } from "next-auth";
import SendCard from "../../../components/SendCard";
import prisma from "@repo/db/client";
import { P2PTransactions } from "../../../components/P2PTransactions";
import { authOptions } from "../../../lib/auth";
import { BalanaceCard } from "../../../components/BalanceCard";
import { redirect } from "next/navigation";

export default async function () {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="w-full">
      <div className="text-4xl text-blue-400 pt-8 mb-8 font-bold">
        P2P Transfer
      </div>
      <SendCard />
    </div>
  );
}
