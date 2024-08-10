import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../shadcncomponents/ui/card";
import { assignments } from "../../utils/AssignmentData";
import AssignmentItem from "./AssignmentItem";

const AssignmentCard: React.FC = () => {
  return (
    // assignment card ui
    <div className="mt-2 w-full max-w-5xl mx-auto hidden sm:block lg:flex">
      <div className="flex flex-col justify-start items-start h-auto w-full">
        <Card className="dark:bg-gray-800 w-11/12 min-h-screen">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="dark:text-white">
              Assignments ({assignments.length})
            </CardTitle>
          </CardHeader>
          {/* mappine the assinment content */}
          <CardContent className="gap-[13px]">
            {assignments.map((assignment, index) => (
              <AssignmentItem key={index} {...assignment} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssignmentCard;
