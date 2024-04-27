import { ConfirmationResult } from "firebase/auth";

async function verifyOTP(otp: string, confirmation: ConfirmationResult) {
  try {
    const result = await confirmation.confirm(otp);
    console.log(result);
    return {
      success: true,
      message: "OTP verified",
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  }
}

export default verifyOTP;
