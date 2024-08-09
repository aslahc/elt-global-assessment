import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClasses } from "../../redux/classSlice";
import ClassTable from "./ClassTable";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../shadcncomponents/ui/card";
import { Checkbox } from "../../shadcncomponents/ui/checkbox";
import { classData } from "../../utils/classData";

const UpcomingClasses: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  useEffect(() => {
    console.log("before despatch", classData);
    dispatch(setClasses(classData));
  }, [dispatch]);

  return (
    <div className="p-4">
      <ThemeSwitcher isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div className="flex flex-col justify-center items-center my-4 h-auto">
        <Card className="dark:bg-gray-800 w-full sm:w-auto">
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle className="dark:text-white">
                Upcoming classes
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                For next 7 days
              </CardDescription>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 mr-4">
                <span className="text-sm text-black dark:text-white font-medium">
                  Booked only
                </span>
                <Checkbox />
              </div>
            </div>
          </CardHeader>
          <CardContent className="gap-[13px]">
            <ClassTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingClasses;
