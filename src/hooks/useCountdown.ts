import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BookingClass } from "../redux/classSlice";
import { ClassData } from "../types/classDataTypes";

const useCountdown = (targetDate: Date, classData: ClassData) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [isDays, setIsDays] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      if (distance <= 0 && classData) {
        const updatedClassData = { ...classData, Live: true };
        dispatch(BookingClass(updatedClassData));
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
    updateCountdown();

    return () => clearInterval(timer);
  }, [targetDate, classData, dispatch]);

  return { timeRemaining, isDays };
};

export default useCountdown;
