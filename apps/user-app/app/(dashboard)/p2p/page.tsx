import { getServerSession } from "next-auth";
import SendCard from "../../../components/SendCard";
import prisma from "@repo/db/client";
import { P2PTransactions } from "../../../components/P2PTransactions";
import { authOptions } from "../../../lib/auth";
import { BalanaceCard } from "../../../components/BalanceCard";

export default async function () {

  return (
    <div className="w-full">
      <SendCard />
    </div>
  );

  // return (
  //   <div className="w-full">
  //     <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
  //       P2P Transfer
  //     </div>
  //     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
  //       <div>
  //         <SendCard />
  //       </div>
  //       <div>
  //         <BalanaceCard amount={balance.amount} locked={balance.locked} />
  //         <div className="pt-4">
  //           <P2PTransactions transactions={transactions} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}




