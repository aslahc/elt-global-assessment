import React from "react";
// Importing the Switch component from Shadcn/UI
import { Switch } from "../../shadcncomponents/ui/switch";
// Defining the types for the props
interface ThemeSwitcherProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}
//  This component allows users to switch between dark and light themes
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
