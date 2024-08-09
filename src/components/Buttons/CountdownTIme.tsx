import React, { useEffect, useState } from "react";

interface CountdownTimeProps {
  targetDate: Date;
}

const CountdownTIme: React.FC<CountdownTimeProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [isDays, setIsDays] = useState<boolean>(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      if (distance <= 0) {
        setTimeRemaining("00:00:00");
        setIsDays(false);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days > 0) {
        setTimeRemaining(`${days} days`);
        setIsDays(true);
      } else {
        setTimeRemaining(
          `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
          )}:${String(seconds).padStart(2, "0")}`
        );
        setIsDays(false);
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call it once immediately

    return () => clearInterval(timer);
  }, [targetDate]);

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

export default CountdownTIme;
