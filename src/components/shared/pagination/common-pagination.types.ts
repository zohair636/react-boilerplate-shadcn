type CommonPaginationBase<T> = {
  records: T[];
  totalRecords?: number
  currentPage: number;
  limit: number;
  onPageChange: (page: number) => void;
  className?: string;
};

type DefaultPaginationConfig<T> = {
  mode: "default";
  onValueChange?: (value: string | null) => void;
} & CommonPaginationBase<T>;

type NumberedPaginationConfig<T> = {
  mode: "numbered";
  withLabel?: boolean;
  rowsPerPage: { label: string; value: string | null }[];
  onValueChange: (value: string | null) => void;
} & CommonPaginationBase<T>;

export type CommonPaginationProps<T> =
  | DefaultPaginationConfig<T>
  | NumberedPaginationConfig<T>;
