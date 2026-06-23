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

const CommonPagination = <T,>(props: CommonPaginationProps<T>) => {
  const {
    records,
    currentPage,
    limit,
    onPageChange,
    onValueChange,
    className,
  } = props;
  const totalRecords = props?.totalRecords ?? records.length;

  if (!totalRecords) return null;

  const safeLimit = Math.max(limit, 1);
  const totalPages = Math.max(1, Math.ceil(totalRecords / safeLimit));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startRange = (safePage - 1) * safeLimit + 1;
  const endRange = Math.min(safePage * safeLimit, totalRecords);

  const getPagination = (page: number, total: number) => {
    if (total <= 7) return [...Array(total)].map((_, i) => i + 1);
    const pagination: (number | "...")[] = [];

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

  const renderPagination = () => {
    if (props.mode === "default") {
      return (
        <div
          className={cn(
            "flex items-center justify-end space-x-2 py-4",
            className,
          )}
        >
          <CommonButton
            label="Previous"
            variant="outline"
            size="sm"
            onClick={() => onPageChange(safePage - 1)}
            disabled={safePage === 1}
          />
          <CommonButton
            label="Next"
            variant="outline"
            size="sm"
            onClick={() => onPageChange(safePage + 1)}
            disabled={safePage === totalPages}
          />
        </div>
      );
    }
    if (props.mode === "numbered") {
      const {
        rowsPerPage = [
          { label: "10", value: "10" },
          { label: "20", value: "20" },
          { label: "30", value: "30" },
        ],
        withLabel = false,
      } = props;
      return (
        <Pagination
          className={cn("flex justify-between items-center", className)}
        >
          <CommonSelect
            label="Show per page"
            options={rowsPerPage}
            onValueChange={(value) => {
              onValueChange?.(value);
              onPageChange(1);
            }}
            orientation="horizontal"
            className="w-fit"
            value={String(safeLimit)}
          />
          <span>{`${startRange} - ${endRange} of ${totalRecords}`}</span>
          <PaginationContent>
            <PaginationItem>
              <CommonButton
                {...(withLabel && { label: "Previous" })}
                leftIcon={<ChevronLeft />}
                onClick={() => onPageChange(safePage - 1)}
                disabled={safePage === 1}
                variant="ghost"
              />
            </PaginationItem>
            {getPagination(safePage, totalPages).map((page, i) => (
              <PaginationItem key={`${page}-${i}`}>
                {page === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    aria-current={safePage === page ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(page);
                    }}
                    className={cn(
                      "border",
                      safePage === page
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
                onClick={() => onPageChange(safePage + 1)}
                disabled={safePage === totalPages}
                variant="ghost"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    }
  };
  return renderPagination();
};

export default CommonPagination;
