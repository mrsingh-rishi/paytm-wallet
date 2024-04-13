import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export default function Page(): JSX.Element {
  return <div className="text-2xl">hello there!</div>;
}
