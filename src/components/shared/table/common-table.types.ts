import type { ColumnDef } from "@tanstack/react-table";

export interface CommonTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  fallback?: string;
  pagination?: boolean;
  sort?: boolean;
  filters?: boolean;
  searchKey?: string;
  searchPlaceholder?: string;
  className?: string;
  fallbackClassName?: string;
  searchClassName?: string;
}
