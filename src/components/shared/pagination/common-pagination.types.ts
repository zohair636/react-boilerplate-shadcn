export interface CommonPaginationProps<T> {
  records: T[];
  currentPage: number;
  limit: number;
  onPageChange: (page: number) => void;
  onValueChange: (value: string | null) => void;
  rowsPerPage: { label: string; value: string | null }[];
  withLabel?: boolean;
  className?: string;
}
