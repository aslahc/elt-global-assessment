import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcncomponents/ui/select";

import { ResultsPerPageSelectorProps } from "../../types/ResultsPerPage";

const ResultsPerPageSelector: React.FC<ResultsPerPageSelectorProps> = ({
  resultsPerPage,
  onResultsPerPageChange,
}) => (
  <div className="flex items-center space-x-2 min-w-max">
    <span className="whitespace-nowrap text-black font-semibold ">
      Results per page
    </span>
    <Select value={resultsPerPage} onValueChange={onResultsPerPageChange}>
      <SelectTrigger className="w-[70px]">
        <SelectValue>{resultsPerPage}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="50">50</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default ResultsPerPageSelector;
