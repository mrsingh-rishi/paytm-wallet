import { PrismaClient } from "@repo/db/client";
import BalanceComponent from "../components/BalanceCompo";

const client = new PrismaClient();

export default function Page(): JSX.Element {
  return (
    <div className="text-2xl">
      hello there! <BalanceComponent />
    </div>
  );
}
