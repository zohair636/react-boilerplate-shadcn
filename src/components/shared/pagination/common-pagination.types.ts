export interface CommonPaginationProps {
  records: string[];
  currentPage: number;
  limit: number;
  onCurrentPage: (page: number) => void;
  className?: string
}
