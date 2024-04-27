"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { createOnRampTransaction } from "../lib/actions/createOnrampTransaction";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "http://localhost:3002/",
  },
  {
    name: "Axis Bank",
    redirectUrl: "http://localhost:3002/",
  },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  const [amount, setAmount] = useState(0);
  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput
          type="text"
          label={"Amount"}
          placeholder={"Amount"}
          onChange={(val) => {
            setAmount(Number(val));
          }}
        />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={(value) => {
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
            );
            setProvider(
              SUPPORTED_BANKS.find((x) => x.name === value)?.name || ""
            );
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4">
          <Button
            onClick={async () => {
              const { data } = await createOnRampTransaction(provider, amount);
              window.location.href =
                `${redirectUrl}?token=${data?.token}&userId=${data?.userId}&amount=${data?.amount}` ||
                "";
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};
