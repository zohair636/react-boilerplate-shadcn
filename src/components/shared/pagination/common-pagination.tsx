import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import type { CommonPaginationProps } from "./common-pagination.types";
import { CommonButton } from "../button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CommonSelect } from "../select";

const CommonPagination = <T,>({
  records,
  currentPage,
  limit,
  onPageChange,
  onValueChange,
  rowsPerPage,
  withLabel = false,
  className,
}: CommonPaginationProps<T>) => {
  if (!records?.length || !rowsPerPage?.length) return null;

  const totalRecords = records.length;
  const totalPages = Math.ceil(totalRecords / limit);
  const startRange = (currentPage - 1) * limit + 1;
  const endRange = Math.min(currentPage * limit, totalRecords);

  const getPagination = (page: number, total: number) => {
    if(total <= 7) return [...Array(total)].map((_, i) => i + 1)
    const pagination = [];

    pagination.push(1);

    const start = Math.max(2, page - 2);
    const end = Math.min(total - 1, page + 2);

    if (start > 2) {
      pagination.push("...");
    }

    for (let i = start; i <= end; i++) {
      pagination.push(i);
    }

    if (end < total - 1) {
      pagination.push("...");
    }

    pagination.push(total);

    return pagination;
  };
  return (
    <Pagination className={className}>
      <CommonSelect
        label="Show per page"
        options={rowsPerPage}
        onValueChange={(value) => {
          onValueChange(value);
          onPageChange(1);
        }}
        orientation="horizontal"
        className="w-fit"
        value={String(limit)}
      />
      <span>{`${startRange} - ${endRange} of ${totalRecords}`}</span>
      <PaginationContent>
        <PaginationItem>
          <CommonButton
            {...(withLabel && { label: "Previous" })}
            leftIcon={<ChevronLeft />}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            variant="ghost"
          />
        </PaginationItem>
        {getPagination(currentPage, totalPages).map((page, i) => (
          <PaginationItem key={`${page}-${i}`}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => onPageChange(page as number)}
                className={cn(
                  "border",
                  currentPage === page
                    ? "bg-black/5 border-black/10"
                    : "border-black/5",
                )}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <CommonButton
            {...(withLabel && { label: "Next" })}
            rightIcon={<ChevronRight />}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="ghost"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CommonPagination;
