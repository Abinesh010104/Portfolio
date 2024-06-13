// ./components/PieChart.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Typography } from "@mui/material";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import GlowCard from "./helper/glow-card"; // Import GlowCard component

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

  const chartConfigs = [
    {
      value: (easySolved / totalEasy) * 100,
      label: "Easy",
      color: "#8bc34a", // Light Green for easy
      count: easySolved,
    },
    {
      value: (mediumSolved / totalMedium) * 100,
      label: "Medium",
      color: "#ffc107", // Amber for medium
      count: mediumSolved,
    },
    {
      value: (hardSolved / totalHard) * 100,
      label: "Hard",
      color: "#f44336", // Red for hard
      count: hardSolved,
    },
  ];

  return (
    <GlowCard identifier="pie-chart">
      <Box className="flex flex-col items-center justify-center bg-[#101123] text-white p-6 rounded-lg shadow-lg w-full">
        <Box className="mb-4 text-center">
          <Typography variant="h3" component="p" className="text-6xl font-bold">
            {totalSolved}
          </Typography>
          <Typography variant="h6" component="p" className="text-xl">
            Solved
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className="text-lg text-gray-300 mb-2"
          >
            {totalQuestions - totalSolved} Unsolved
          </Typography>
        </Box>
        <Box className="flex flex-wrap justify-center gap-12">
          {chartConfigs.map((config, index) => (
            <Box key={index} className="text-center w-40">
              <div title={`${config.count} solved`}>
                <CircularProgressbar
                  value={config.value}
                  text={`${Math.round(config.value)}%`}
                  styles={buildStyles({
                    pathColor: config.color,
                    textColor: "#fff",
                    trailColor: "#2c3e50",
                  })}
                />
              </div>
              <Typography
                variant="body1"
                gutterBottom
                className="text-base mt-2"
              >
                {config.label}
              </Typography>
              <Typography variant="body2" className="text-sm text-gray-300">
                {config.value.toFixed(2)}%
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </GlowCard>
  );
};

export default PieChart;
