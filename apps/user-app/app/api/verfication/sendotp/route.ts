import { SendOTP } from "../../../../lib/actions/sendOTP";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { number } = await req.json();
    console.log("this is the number", number);
    if (!number) {
      return NextResponse.json(
        { success: false, message: "Phone number is required" },
        {
          status: 400,
        }
      );
    }

    const {verification, sid} = await SendOTP(number);
    return NextResponse.json(
      { success: true, message: "OTP sent successfully", verification, sid },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to send OTP:", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send OTP",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
