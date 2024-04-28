import {
  ApplicationVerifier,
  ConfirmationResult,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";

async function sendOTP(
  phone: string,
  recaptchaVerifier: ApplicationVerifier,
  app: any
): Promise<{
  success: boolean;
  message: string;
  confirmation?: ConfirmationResult;
}> {
  try {
    const auth = getAuth(app);

    const formatedPhoneNumber = `+91${phone.replace(/\D/g, "")}`;

    const confirmation = await signInWithPhoneNumber(
      auth,
      formatedPhoneNumber,
      recaptchaVerifier
    );

    return {
      success: true,
      message: "OTP Sent to your phone number please verify otp",
      confirmation,
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  }
}

export default sendOTP;
