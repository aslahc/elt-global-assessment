import React from "react";
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

import { PaginationProps } from "../../types/pagination";

const PaginationComponent: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages = usePagination(totalPages, currentPage);

  return (
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
