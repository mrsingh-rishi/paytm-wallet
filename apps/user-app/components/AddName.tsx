"use client";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../baseURL";
import { getSession } from "next-auth/react";

export const AddName = () => {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const session = await getSession();
    console.log(session?.user);
    // e.preventDefault(); // Prevent form submission

    try {
      const response = await axios.put(`${baseUrl}/api/user/`, {
        id: session?.user?.id,
        name,
      });
      console.log(response);
      if (response.data.success) {
        window.location.pathname = "/dashboard";
      }
    } catch (error) {
      console.error("Error submitting name:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center light">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Enter your name to complete Signup
        </h2>
        <div className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Enter your name"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
