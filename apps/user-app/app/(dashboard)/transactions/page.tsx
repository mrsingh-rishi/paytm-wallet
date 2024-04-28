import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/client";
import { P2PTransactions } from "../../../components/P2PTransactions";
import { redirect } from "next/navigation";

interface Trxn {
  time: Date;
  amount: number;
  positive: boolean;
  user: {
    id: number;
    name: string | null;
    email: string | null;
    number: string;
    password: string;
  } | null;
}

export default async function () {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/");
  }
  const transactionsRecieved: Trxn[] = await getP2PTransactionsRecieved();
  const transactionsSent: Trxn[] = await getP2PTransactionsSent();

  const transactions: Trxn[] = [...transactionsRecieved, ...transactionsSent];
  transactions.sort((a, b) => b.time.getTime() - a.time.getTime());
  return (
    <div className="w-full">
      <div className="text-4xl text-blue-400 pt-8 mb-8 font-bold">
        Transactions
      </div>
      <div className="w-full">
        <P2PTransactions transactions={transactions} />
      </div>
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

  const result: Trxn[] = [];

  for (const t of transactions) {
    const toUser = await prisma.user.findFirst({
      where: {
        id: t.fromUserId,
      },
    });

    result.push({
      time: t.timestamp,
      amount: t.amount,
      positive: true,
      user: toUser,
    });
  }

  return result;
}

async function getP2PTransactionsSent(): Promise<Trxn[]> {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });

  const result: Trxn[] = [];

  for (const t of transactions) {
    const toUser = await prisma.user.findFirst({
      where: {
        id: t.toUserId,
      },
    });

    result.push({
      time: t.timestamp,
      amount: t.amount,
      positive: false,
      user: toUser,
    });
  }

  return result;
}
