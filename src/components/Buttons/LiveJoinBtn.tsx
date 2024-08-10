import React from "react";
import { Button } from "../../shadcncomponents/ui/button";
const LiveJoinBtn = () => {
  return (
    <div>
      <Button
        variant="custom"
        size="custom"
        className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-[0.345rem] text-white font-semibold py-2 px-3 flex items-center space-x-1"
      >
        <span>Join now</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </Button>
    </div>
  );
};

export default LiveJoinBtn;
