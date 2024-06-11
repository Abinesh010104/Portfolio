import { useState, useEffect } from "react";

const useLeetCodeStats = (username) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        const data = await response.json();
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { stats, loading, error };
};

export default useLeetCodeStats;
