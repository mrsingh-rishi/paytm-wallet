"use client";

import { useBalance } from "@repo/store/useBalance";

const BalanceComponent = () => {
  const balance = useBalance();

  return <div>{balance}</div>;
};

export default BalanceComponent;
