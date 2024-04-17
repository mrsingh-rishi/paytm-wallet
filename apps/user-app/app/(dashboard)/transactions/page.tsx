import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/client";
import { P2PTransactions } from "../../../components/P2PTransactions";

export default async function () {
  const transactionsRecieved = await getP2PTransactionsRecieved();
  const transactionsSent = await getP2PTransactionsSent();

  const transactions = [...transactionsRecieved, ...transactionsSent];
  transactions.sort((a, b) => b.time.getTime() - a.time.getTime());
  return (
    <div className="w-full">
      <P2PTransactions transactions={transactions} />
    </div>
  );
}

async function getP2PTransactionsRecieved() {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(session?.user?.id),
    },
  });
  return transactions.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
    positive: true,
  }));
}

async function getP2PTransactionsSent() {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });
  return transactions.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
    positive: false,
  }));
}
