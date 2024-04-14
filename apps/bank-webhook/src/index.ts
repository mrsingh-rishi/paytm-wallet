import express from "express";
import dotenv from "dotenv";
import z from "zod";
import db from "@repo/db/client";

dotenv.config();

const server = express();
server.use(express.json());
const port = process.env.PORT || 4000;
interface paymentInformationInterface {
  token: string;
  userId: string;
  amount: number;
}
const paymentInfoSchema = z.object({
  token: z.string(),
  userId: z.string(),
  amount: z.number(),
});

server.get("/", (req, res) => {
  res.send("WebHook is Working!");
});
server.post("/hdfcWebhook", async (req, res) => {
  const { success } = paymentInfoSchema.safeParse(req);
  if (!success) {
    return res.status(400).json({ message: "Bad Request" });
  }
  //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
  const paymentInformation: paymentInformationInterface = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };

  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    res.json({
      message: "Captured",
    });
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});
server.listen(port, () => console.log("Listening on port " + port));
