import twilio from "twilio";

export async function verifyOtp(number: string, otp: string, sid: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  // Initialize Twilio client
  const client = twilio(accountSid, authToken);

  const verification_check = await client.verify.v2
    .services(sid)
    .verificationChecks.create({ to: number, code: otp });

  return verification_check.status;
}
