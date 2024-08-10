// hooks/useTheme.ts
import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return { isDarkTheme, toggleTheme };
};

export default useTheme;
