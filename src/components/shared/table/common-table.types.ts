import type { ColumnDef } from "@tanstack/react-table";
import type { ComponentProps, ReactNode } from "react";
import { CommonPagination } from "../pagination";

export type FiltersConfig =
  | { type: "search"; key: string; placeholder?: string }
  | {
      type: "status";
      key: string;
      options: { label: string; value: string }[];
    }
  | {
      type: "multi-select";
      key: string;
      options: { label: string; value: string }[];
    };

export interface CommonTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  fallback?: ReactNode;
  fallbackIcon?: ReactNode;
  pagination?: boolean;
  paginationProps?: ComponentProps<typeof CommonPagination>;
  sort?: boolean;
  filters?: FiltersConfig | FiltersConfig[];
  enableColumnVisibility?: boolean;
  enableRowSelection?: boolean;
  onRowSelectionChange?: (rows: TData[]) => void;
  isLoading?: boolean;
  tableWrapperClassName?: string;
  filtersWrapperClassName?: string;
  className?: string;
  fallbackClassName?: string;
  fallbackLabelClassName?: string;
  filterClassName?: string;
}
