"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import BalanceComponent from "../components/BalanceCompo";
import { Appbar } from "@repo/ui/appbar";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
    <div className="text-2xl">
      <Appbar
        onSignin={signIn}
        onSignout={signOut}
        user={session?.data?.user}
      />
    </div>
  );
}
