import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import type { CommonPaginationProps } from "./common-pagination.types";
import { CommonButton } from "../button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CommonPagination = ({
  records,
  currentPage,
  limit,
  onCurrentPage,
  withLabel = false,
  className,
}: CommonPaginationProps) => {
  if (!records?.length) return null;

  const totalRecords = records.length;
  const totalPages = Math.ceil(totalRecords / limit);
  return (
    <Pagination className={className}>
      <>
        <span>{`${currentPage} - ${totalPages} of ${totalRecords}`}</span>
      </>
      <PaginationContent>
        <PaginationItem>
          <CommonButton
            {...(withLabel && { label: "Previous" })}
            leftIcon={<ChevronLeft />}
            onClick={() => onCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            variant="ghost"
          />
        </PaginationItem>
        {[...Array(totalPages)].map((_, page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onCurrentPage(page + 1)}
              className={cn(
                "border",
                currentPage === page + 1
                  ? "bg-black/5 border-black/10"
                  : "border-black/5",
              )}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <CommonButton
            {...(withLabel && { label: "Next" })}
            rightIcon={<ChevronRight />}
            onClick={() => onCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="ghost"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CommonPagination;
