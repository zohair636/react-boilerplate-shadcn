import type { ColumnDef } from "@tanstack/react-table";

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
  fallback?: string;
  pagination?: boolean;
  sort?: boolean;
  filters?: FiltersConfig | FiltersConfig[];
  className?: string;
  fallbackClassName?: string;
  filterClassName?: string;
}
