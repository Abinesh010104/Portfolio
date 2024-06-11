"use client";
import React from "react";
import useLeetCodeStats from "../hooks/useLeetCodeStats";
import SubmissionCalendar from "./SubmissionCalendar";
import PieChart from "./PieChart";
const LeetCodeStats = ({ username }) => {
  const { stats, loading, error } = useLeetCodeStats(username);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading stats: {error.message}
      </p>
    );

  return (
    <div className="mt-8">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Leetcode Stats
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <PieChart data={stats} />
      <SubmissionCalendar submissionCalendar={stats.submissionCalendar} />
    </div>
  );
};

export default LeetCodeStats;
