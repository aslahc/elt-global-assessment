import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../shadcncomponents/ui/card";

const AssignmentCard: React.FC = () => {
  const assignments = [
    { title: "Logo design for a Airline", deadline: "20/06/2024" },
    { title: "UIUX Design - Ecommerce Mobile app", deadline: "22/06/2024" },
    { title: "User Persona and User Journey", deadline: "24/06/2024" },
    { title: "Typefaces", deadline: "28/06/2024" },
  ];

  return (
    <div className=" mt-2 w-full max-w-5xl mx-auto hidden sm:block lg:flex">
      {" "}
      {/* Increased width and centered */}
      <div className="flex flex-col justify-start items-start h-auto w-full">
        {" "}
        {/* Full width */}
        <Card className="dark:bg-gray-800 w-11/12 min-h-screen  ">
          {" "}
          {/* Full width */}
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle className="dark:text-white">Assignments (4)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="gap-[13px]">
            {assignments.map((assignment, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-[0.545rem] p-2 border-2 border-gray-200 mb-4 mt-2 shadow-sm "
              >
                <h3 className="text-sm font-medium dark:text-white">
                  {assignment.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Deadline: {assignment.deadline}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssignmentCard;
