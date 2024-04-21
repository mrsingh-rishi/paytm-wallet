import twilio from "twilio";

export async function SendOTP(number: string) {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    // Initialize Twilio client
    const client = twilio(accountSid, authToken);

    // Create a new service
    const service = await client.verify.services.create({
      friendlyName: "PayTM Wallet",
    });
    // Send verification code via SMS
    const verification = await client.verify
      .services(service.sid)
      .verifications.create({
        to: number,
        channel: "sms",
      });

    console.log("OTP SENT Successfully");
    return { verification, sid: service.sid };
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error; // Rethrow the error to handle it elsewhere
  }
}
