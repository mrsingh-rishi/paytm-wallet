import { Card } from "@repo/ui/card";

export const P2PTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    positive: boolean;
    user: any;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent Transactions</div>
      </Card>
    );
  }

  return (
    <Card title="Recent Transactions">
      {transactions.map((t) => (
        <div className="flex justify-between bg-white px-3 m-3 ">
          <div className="flex flex-col">
            <div className="text-[#6a51a6] font-semibold">{t.user.name}</div>
            <div className="text-slate-600 text-xs">
              {t.time.toDateString()}
            </div>
          </div>
          <div>
            <div className="text-sm">
              {t.positive ? "Received" : "Sent"} INR
            </div>
            <div className="flex flex-col font-semibold">
              <span style={{ color: t.positive ? "green" : "red" }}>
                {t.positive ? "+" : "-"} Rs {t.amount / 100}
              </span>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};
