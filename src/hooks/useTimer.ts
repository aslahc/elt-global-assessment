import { useState, useEffect } from "react";

export const useTimer = (targetDate?: Date) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isDays, setIsDays] = useState<boolean>(false);

  useEffect(() => {
    if (targetDate) {
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
    } else {
      const intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [targetDate]);

  return { timeRemaining, elapsedTime, isDays };
};
