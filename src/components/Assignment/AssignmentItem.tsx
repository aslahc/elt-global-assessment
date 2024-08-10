import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../shadcncomponents/ui/card";

// Define a type for the assignment object
interface Assignment {
  title: string;
  deadline: string;
}

// Define a reusable AssignmentItem component for each assignment card
const AssignmentItem: React.FC<Assignment> = ({ title, deadline }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-[0.545rem] p-2 border-2 border-gray-200 mb-4 mt-2 shadow-sm">
      <h3 className="text-sm font-medium dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Deadline . {deadline}
      </p>
    </div>
  );
};

export default AssignmentItem;
