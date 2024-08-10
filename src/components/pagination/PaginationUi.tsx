import React from "react";
import PaginationComponent from "./PaginationComponent";
import ResultsPerPageSelector from "./ResultsPerPageSelector";
import { PaginationUiProps } from "../../types/pagination-ui";

const PaginationUi: React.FC<PaginationUiProps> = ({
  totalPages,
  currentPage,
  resultsPerPage,
  onPageChange,
  onResultsPerPageChange,
}) => {
  return (
    <div className="flex items-center justify-between space-x-40">
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <ResultsPerPageSelector
        resultsPerPage={resultsPerPage}
        onResultsPerPageChange={onResultsPerPageChange}
      />
    </div>
  );
};

export default PaginationUi;
