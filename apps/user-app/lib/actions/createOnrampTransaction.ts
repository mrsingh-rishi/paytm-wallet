"use server";

import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnRampTransaction(
  provider: string,
  amount: number
) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return {
      message: "Unauthenticated request",
    };
  }
  const token = (Math.random() * 1000).toString();
  const tsx = await db.onRampTransaction.create({
    data: {
      provider,
      status: "Processing",
      amount: amount * 100,
      startTime: new Date(),
      userId: Number(session?.user?.id),
      token: token,
    },
  });

  return {
    message: "Done ",
    data: tsx,
  };
}
