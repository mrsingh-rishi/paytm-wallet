import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation";
import LineGraph from "../../../components/LineGraph";
import prisma from "@repo/db/client";

export default async function () {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/");
  }
  const userId: number = Number(session.user.id);
  const currentTime = new Date().getHours();
  let greeting = "";
  const name = session?.user.name;
  if (currentTime >= 5 && currentTime < 12) {
    greeting = "Good morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good afternoon";
  } else if (currentTime >= 18 && currentTime < 22) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  const transactionsRecieved = await getP2PTransactionsRecieved(userId);
  const transactionsSent = await getP2PTransactionsSent(userId);
  const balance = await getBalance(userId);
  const onRampTransaction = await getOnRampTransaction(userId);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-900 mt-6">
        <span className="text-blue-400">
          {greeting}, {name}
        </span>
      </h1>

      <LineGraph
        credited={transactionsRecieved}
        debited={transactionsSent}
        balance={balance}
        onRampTransaction={onRampTransaction}
      />
    </div>
  );
}

async function getP2PTransactionsRecieved(userId: number) {
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(userId),
    },
  });
  return transactions.map((t) => Number(t.amount / 100));
}

async function getP2PTransactionsSent(userId: number) {
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(userId),
    },
  });
  return transactions.map((t) => Number(t.amount / 100));
}

async function getBalance(userId: number) {
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(userId),
    },
  });
  return balance?.amount;
}

async function getOnRampTransaction(userId: number) {
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(userId),
    },
  });
  return txns.map((t) => t.amount);
}
