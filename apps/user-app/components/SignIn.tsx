"use client";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput"; // Assuming you have a TextInput component
import { signIn } from "next-auth/react";
import { useState } from "react";
import { SendOTP } from "../lib/actions/sendOTP";
import axios from "axios";
import { baseUrl } from "../baseURL";

export const SignIn = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showSigninButton, setShowSigninButton] = useState(false);
  const [hidePhoneInput, setHidePhoneInput] = useState(false);
  const [hideOtpButton, setHideOtpButton] = useState(false);
  const [showPhoneDiv, setShowPhoneDiv] = useState(false);
  const [showVerifyOtpButton, setShowVerifyOtpButton] = useState(false);
  const [showOtpVerifiedSpan, setShowOtpVerifiedSpan] = useState(false);
  const [sid, setSid] = useState("");
  const [otp, setOtp] = useState("");
  async function handleLogin() {
    await signIn("credentials", {
      phone: number,
      password: password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex-grow"></div>
      <div className="w-full max-w-md">
        <Center>
          <div className="max-w-md w-full bg-white shadow-md px-8 pt-6 pb-8 mb-4 rounded-xl border border-gray-200">
            <h1 className="text-3xl font-extrabold text-blue-400 text-center mb-4">
              Paytm Wallet
            </h1>
            <h2 className="text-xl font-semibold text-center mb-4">Log In </h2>
            {!hidePhoneInput && (
              <div>
                <TextInput
                  placeholder="Enter your phone number"
                  onChange={(value: string) => {
                    setNumber(value);
                  }}
                  type="text"
                  label={"Phone Number"}
                />
              </div>
            )}

            {showPhoneDiv && (
              <div className="text-sm font-semibold w-full">
                <p className="flex items-center text-center">
                  <span className="mr-2">Phone Number:</span>
                  <span className="text-blue-500">{number}</span>
                  {showOtpVerifiedSpan && (
                    <span className="ml-2 text-green-400"></span>
                  )}
                </p>
              </div>
            )}

            {!hideOtpButton && (
              <div className="mt-6">
                <button
                  onClick={async () => {
                    setHidePhoneInput(true);
                    setShowPhoneDiv(true);
                    setHideOtpButton(true);
                    setShowVerifyOtpButton(true);
                    setShowOtpInput(true);
                    if (number.length !== 10) {
                    } else {
                      const response = await axios.post(
                        `${baseUrl}/api/verfication/sendotp`,
                        { number: `+91${number}` }
                      );
                      if (response.data.success) {
                        setSid(response.data.sid);
                        alert("OTP is Sent your Number successfully");
                      }
                    }
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                >
                  Send Otp
                </button>
              </div>
            )}
            {showOtpInput && (
              <div>
                <TextInput
                  placeholder={"128974"}
                  onChange={function (value: string): void {
                    setOtp(value);
                  }}
                  label={"Enter OTP"}
                  type={"text"}
                />
              </div>
            )}
            {showPasswordInput && (
              <div className="mt-0">
                <TextInput
                  placeholder="Enter your password"
                  onChange={(value: string) => {
                    setPassword(value);
                  }}
                  type="password"
                  label={"Password"}
                />
              </div>
            )}
            {showVerifyOtpButton && (
              <div className="mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={async () => {
                    try {
                      const response = await axios.post(
                        `${baseUrl}/api/verfication/verify`,
                        { number: `+91${number}`, otp: otp, sid }
                      );
                      if (response.data.success) {
                        setShowOtpInput(false);
                        setShowVerifyOtpButton(false);
                        setShowOtpVerifiedSpan(true);
                        setShowPasswordInput(true);
                        setShowSigninButton(true);
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  Verify Otp
                </button>
              </div>
            )}
            {showSigninButton && (
              <div className="mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </Center>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};
