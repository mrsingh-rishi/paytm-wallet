import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/client";
import { P2PTransactions } from "../../../components/P2PTransactions";
import { redirect } from "next/navigation";

interface Trxn {
  time: Date;
  amount: number;
  positive: boolean;
  to: {
    name: string;
  };
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
    <div>
      <div className="text-4xl text-blue-400 pt-8 mb-8 font-bold">
        Transactions
      </div>
      <div className="w-full">
        {/* <P2PTransactions transactions={transactions} /> */}
        {transactions.map((txn) => (
          <Transaction
            sender={txn.to.name}
            amount={txn.amount}
            sentTime={txn.time.toDateString()}
            isSent={txn.positive}
          />
        ))}
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
  return transactions.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
    positive: true,
    to: async () => {
      return await prisma.user.findFirst({
        where: {
          id: t.fromUserId,
        },
      });
    },
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
    to: async () => {
      return await prisma.user.findFirst({
        where: {
          id: t.toUserId,
        },
      });
    },
  }));
}

const Transaction = ({
  sender,
  amount,
  sentTime,
  isSent,
}: {
  sender: string;
  amount: number;
  sentTime: string;
  isSent: boolean;
}) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md mb-4">
      <img
        src={isSent ? "/sent-icon.png" : "/received-icon.png"} // Placeholder images for sent and received transactions
        alt={isSent ? "Sent" : "Received"}
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4">
        <h2 className="text-lg font-semibold">
          {isSent ? "Sent to" : "Received from"} {sender}
        </h2>
        <p className="text-sm text-gray-500">
          {isSent ? "You sent" : "You received"} Rs. {amount}
        </p>
        <p className="text-xs text-gray-500">
          {isSent ? "Sent" : "Received"} at {sentTime}
        </p>
      </div>
    </div>
  );
};

// export default Transaction;
