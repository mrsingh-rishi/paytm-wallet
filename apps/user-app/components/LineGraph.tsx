"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph({
  credited,
  debited,
  balance,
  onRampTransaction,
}: {
  credited: number[];
  debited: number[];
  balance: number | undefined;
  onRampTransaction: number[];
}) {
  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Credited",
        data: credited,
        borderColor: "rgb(0, 255, 0)",
      },
      {
        label: "Debited",
        data: debited,
        borderColor: "rgb(255, 0, 0)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          color: "red",
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-[20vh] w-[90%] m-6 shadow-lg">
      <div className="bg-blue-100 p-2 rounded-lg">
        <p className="font-bold text-sm text-gray-500">Your Balance is </p>
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="">₹{balance ? Number(balance / 100) : 0}</span>
        </h1>
        <div className="mx-auto w-full">
          <Line options={options} data={lineChartData} className="h-[10%]" />
        </div>
      </div>
    </div>
  );
}

export default LineGraph;
