import React from "react";
import useLiveTimer from "../../hooks/useLiveTImer";
import { formatTime } from "../../utils/formatTime";
// this commponet is for to start timer when class is live
const LiveTimer: React.FC = () => {
  // hooks to start timer
  const elapsedTime = useLiveTimer();

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
