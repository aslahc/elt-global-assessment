import React from "react";
// Importing the Pagination-related components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../../shadcncomponents/ui/pagination";
import { usePagination } from "../../hooks/usePagination";
// Importing the types for the pagination component's props
import { PaginationProps } from "../../types/pagination";

// Defining the PaginationComponent as a functional React component
const PaginationComponent: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  // Using the custom pagination hook to generate the list of pages
  const pages = usePagination(totalPages, currentPage);

  return (
    // Wrapper component for the entire pagination UI
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          href="#"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        />
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <PaginationEllipsis key={index}>...</PaginationEllipsis>
          ) : (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={() => onPageChange(page as number)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationNext
          href="#"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        />
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
