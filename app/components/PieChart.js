// ./components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const {
    totalSolved,
    totalQuestions,
    easySolved,
    totalEasy,
    mediumSolved,
    totalMedium,
    hardSolved,
    totalHard,
  } = data;

  const chartData = {
    datasets: [
      // Outer ring
      {
        data: [
          easySolved,
          mediumSolved,
          hardSolved,
          totalQuestions - totalSolved,
        ],
        backgroundColor: ["#16f2b3", "#ffeb3b", "#ff0000", "#5A5A5A"],
        hoverBackgroundColor: ["#0da882", "#fdd835", "#e53935", "#4B4B4B"],
        borderWidth: 0,
      },
      // Inner ring
      {
        data: [
          easySolved,
          totalEasy - easySolved,
          mediumSolved,
          totalMedium - mediumSolved,
          hardSolved,
          totalHard - hardSolved,
          0,
          0, // To maintain structure for "Unsolved"
        ],
        backgroundColor: [
          "#16f2b3",
          "#004d40",
          "#ffeb3b",
          "#fbc02d",
          "#ff0000",
          "#b71c1c",
          "#5A5A5A",
          "#5A5A5A",
        ],
        hoverBackgroundColor: [
          "#0da882",
          "#00332c",
          "#fdd835",
          "#f9a825",
          "#e53935",
          "#8c0c0c",
          "#4B4B4B",
          "#4B4B4B",
        ],
        borderWidth: 0,
      },
    ],
    labels: [
      "Easy Solved",
      "Easy Unsolved",
      "Medium Solved",
      "Medium Unsolved",
      "Hard Solved",
      "Hard Unsolved",
      "Unsolved",
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#0d1224] text-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="relative w-64 h-64">
        <Doughnut data={chartData} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-5xl font-bold">{totalSolved}</p>
          <p className="text-lg">Solved</p>
          <p className="text-sm">20 Attempting</p>
        </div>
      </div>
      <div className="mt-4 flex justify-around w-full">
        <div className="flex items-center">
          <span className="w-4 h-4 bg-[#16f2b3] block"></span>
          <p className="ml-2">
            Easy ({easySolved}/{totalEasy})
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-[#ffeb3b] block"></span>
          <p className="ml-2">
            Medium ({mediumSolved}/{totalMedium})
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-[#ff0000] block"></span>
          <p className="ml-2">
            Hard ({hardSolved}/{totalHard})
          </p>
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <span className="w-4 h-4 bg-[#5A5A5A] block"></span>
        <p className="ml-2">
          Unsolved ({totalQuestions - totalSolved}/{totalQuestions})
        </p>
      </div>
    </div>
  );
};

export default PieChart;
