"use client";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput"; // Assuming you have a TextInput component
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    try {
      const res = await signIn("credentials", {
        name: name,
        phone: number,
        password: password,
        isSignup: true,
        redirect: false,
      });
      if (res?.ok) {
        toast.success("Signed Up Successfully");
        router.push("/dashboard");
      } else {
        toast.error(res?.error || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
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
            <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>
            <div>
              <TextInput
                placeholder="Enter your name"
                onChange={(value: string) => {
                  setName(value);
                }}
                type="text"
                label={"Name"}
              />
            </div>
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
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center mt-4">
              <p>Already have an account?</p>
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={() => router.push("/auth/signin")}
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

export default SignUp;
