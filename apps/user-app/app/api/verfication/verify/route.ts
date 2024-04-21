import { NextRequest, NextResponse } from "next/server";
import { verifyOtp } from "../../../../lib/actions/verifyOtp";

export const POST = async (req: NextRequest) => {
  try {
    const { number, otp, sid } = await req.json();

    if (!number || !otp) {
      return NextResponse.json(
        { success: false, message: "Phone number and OTP are required" },
        {
          status: 400,
        }
      );
    }

    const status = await verifyOtp(number, otp, sid);

    if (status === "approved") {
      return NextResponse.json(
        { success: true, message: "OTP verified successfully" },
        {
          status: 200,
        }
      );
    }

    return NextResponse.json(
      { success: false, message: "Invalid OTP" },
      {
        status: 400,
      }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
