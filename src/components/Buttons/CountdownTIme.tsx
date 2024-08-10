import React from "react";
import useCountdown from "../../hooks/useCountdown";
import { ClassData } from "../../types/classDataTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Adjust the path according to your store setup

import { CountdownTimeProps } from "../../types/CountdownTime";

const CountdownTime: React.FC<CountdownTimeProps> = ({
  targetDate,
  classId,
}) => {
  const classData = useSelector((state: RootState) =>
    state.classes.classes.find((classItem) => classItem.id === classId)
  );

  // Handle the case where classData might be undefined
  if (!classData) {
    return <div>Class data not found</div>;
  }

  const { timeRemaining, isDays } = useCountdown(targetDate, classData);

  return (
    <div
      className={`flex items-center space-x-2 font-bold pl-3 ${
        isDays
          ? "text-gray-500 dark:text-gray-400"
          : "text-blue-500 dark:text-blue-400"
      }`}
    >
      <span>{timeRemaining}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    </div>
  );
};

export default CountdownTime;
