"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../lib/actions/p2pTransfer";

const SendCard = () => {
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState("");

  return (
    <div className="h-[90vh]">
      <Center>
        <Card title={"Send"}>
          <div className="min-w-72 pt-2">
            <TextInput
              placeholder={"7017025022"}
              type="text"
              onChange={(value: string) => setNumber(value)}
              label={"Number"}
            />

            <TextInput
              placeholder={"69"}
              type="text"
              onChange={(value: string) => setAmount(Number(value))}
              label={"Amount"}
            />
            <div className="pt-4 flex justify-center">
              <Button
                onClick={async () => {
                  await p2pTransfer(number, amount * 100);
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
};

export default SendCard;
