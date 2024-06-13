// ./app/components/SubmissionCalendar.js
import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../styles/heatmap.css"; // Ensure this file is imported
import { calcOpacity } from "../utils/calcOpacity"; // Assuming you have this utility function

const SubmissionCalendar = ({ submissionCalendar }) => {
  const today = new Date();
  const endDate = today.toISOString().split("T")[0];
  const startDate = new Date(today.setFullYear(today.getFullYear() - 1))
    .toISOString()
    .split("T")[0];

  const values = Object.entries(submissionCalendar).map(
    ([timestamp, count]) => ({
      date: new Date(parseInt(timestamp) * 1000).toISOString().split("T")[0],
      count,
    })
  );

  return (
    <div className="mt-8 p-4 bg-[#0d1224] shadow-md rounded text-white">
      <h2 className="text-center text-lg font-bold mb-4">
        Submission Calendar
      </h2>
      <div className="heatmap-container">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient-empty" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0d1224" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0d1224" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            const opacity = calcOpacity(value.count);
            return `color-scale-${Math.floor(opacity * 4)}`;
          }}
        />
      </div>
    </div>
  );
};

export default SubmissionCalendar;
