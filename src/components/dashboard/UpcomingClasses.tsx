import React, { useState } from "react";
import ClassTable from "./ClassTable";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../shadcncomponents/ui/card";
import { Checkbox } from "../../shadcncomponents/ui/checkbox";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PaginationUi from "../pagination/PaginationUi";

const UpcomingClasses: React.FC = () => {
  const [showBookedOnly, setShowBookedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState("10");

  // Get the classes from the Redux store
  const classes = useSelector((state: RootState) => state.classes.classes);

  // Filter classes based on the `showBookedOnly` flag
  const filteredClasses = showBookedOnly
    ? classes.filter((classItem) => classItem.Booked)
    : classes;

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    filteredClasses.length / parseInt(resultsPerPage)
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleResultsPerPageChange = (value: string) => {
    setResultsPerPage(value);
    setCurrentPage(1); // Reset to the first page when changing results per page
  };

  return (
    <div className="pl-4 mt-2">
      {/* <ThemeSwitcher isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} /> */}
      <div className="flex flex-col justify-start items-start  h-auto w-auto  ">
        <Card className="dark:bg-gray-800  sm:w-auto min-h-screen">
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
                <Checkbox
                  checked={showBookedOnly}
                  onCheckedChange={(checked) =>
                    setShowBookedOnly(checked === true)
                  }
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="gap-[13px]">
            <ClassTable
              showBookedOnly={showBookedOnly}
              currentPage={currentPage}
              resultsPerPage={parseInt(resultsPerPage)}
            />
          </CardContent>
        </Card>
        <div className="mt-6 ">
          <PaginationUi
            totalPages={totalPages}
            currentPage={currentPage}
            resultsPerPage={resultsPerPage}
            onPageChange={handlePageChange}
            onResultsPerPageChange={handleResultsPerPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingClasses;
