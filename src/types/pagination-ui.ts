// src/types/pagination-ui.ts
export interface PaginationUiProps {
  totalPages: number;
  currentPage: number;
  resultsPerPage: string;
  onPageChange: (page: number) => void;
  onResultsPerPageChange: (value: string) => void;
}
