export interface CommonPaginationProps {
  records: string[];
  currentPage: number;
  limit: number;
  onCurrentPage: (page: number) => void;
  withLabel?: boolean;
  className?: string;
}
