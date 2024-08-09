import React, { useEffect, useState } from "react";

const LiveTimer: React.FC = () => {
  const [elapsedTime, setElapsedTime] = useState<number>(0); // Start from 0

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
  console.log(elapsedTime);

  return (
    <div className="flex items-center space-x-1">
      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
      <span className="font-semibold text-red-500">Live</span>
      <span className="text-gray-500 dark:text-gray-400">
        ({formatTime(elapsedTime)})
      </span>
    </div>
  );
};

export default LiveTimer;
