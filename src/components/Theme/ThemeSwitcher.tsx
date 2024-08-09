import React from "react";
import { Switch } from "../../shadcncomponents/ui/switch";

interface ThemeSwitcherProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  isDarkTheme,
  toggleTheme,
}) => {
  return (
    <div>
      <div className="flex items-end justify-end space-x-2">
        <span className="text-sm font-medium dark:text-white">
          {isDarkTheme ? "Dark" : "Light"}
        </span>
        <Switch isDarkTheme={isDarkTheme} onCheckedChange={toggleTheme} />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
