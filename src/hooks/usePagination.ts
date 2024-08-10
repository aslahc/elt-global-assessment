import { useMemo } from "react";

export const usePagination = (totalPages: number, currentPage: number) => {
  return useMemo(() => {
    const pages = [];

    for (let i = 1; i <= Math.min(5, totalPages); i++) {
      pages.push(i);
    }

    if (totalPages > 6) {
      pages.push("ellipsis");
    }

    if (totalPages > 5) {
      pages.push(totalPages);
    }

    return pages;
  }, [totalPages, currentPage]);
};
