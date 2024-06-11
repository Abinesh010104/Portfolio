// ./app/components/SubmissionCalendar.js
import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../styles/style.css";
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
    <div className="mt-8 p-4 bg-white shadow-md rounded">
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
  );
};

export default SubmissionCalendar;
