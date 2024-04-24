"use client";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput"; // Assuming you have a TextInput component
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export const SignIn = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin() {
    await signIn("credentials", {
      phone: number,
      password: password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
    toast.success("Sign in successful");
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

            <div className="mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </div>
        </Center>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};
