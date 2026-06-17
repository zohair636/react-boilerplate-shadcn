import type { ColumnDef } from "@tanstack/react-table";
import type { ReactNode } from "react";

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
  pagination?: boolean;
  sort?: boolean;
  filters?: FiltersConfig | FiltersConfig[];
  enableColumnVisibility?: boolean;
  enableRowSelection?: boolean;
  onRowSelectionChange?: (rows: TData[]) => void;
  tableWrapperClassName?: string;
  filtersWrapperClassName?: string;
  className?: string;
  fallbackClassName?: string;
  filterClassName?: string;
}
