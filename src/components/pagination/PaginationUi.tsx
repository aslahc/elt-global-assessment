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
      {/* PaginationComponent: Renders pagination controls */}
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      {/* ResultsPerPageSelector: Renders selector for results per page */}
      <ResultsPerPageSelector
        resultsPerPage={resultsPerPage}
        onResultsPerPageChange={onResultsPerPageChange}
      />
    </div>
  );
};

export default PaginationUi;
