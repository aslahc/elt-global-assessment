import { useState, useEffect } from "react";

const useLiveTimer = () => {
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return elapsedTime;
};

export default useLiveTimer;
