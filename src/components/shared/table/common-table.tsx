import type { CommonTableProps } from "./common-table.types";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CommonButton } from "../button";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { getTableColumns, renderFilters } from "./common-table.utils";
import { CommonDropdown } from "../dropdown";
import { RenderIcon } from "@/utils/icon-utils";
import { Skeleton } from "@/components/ui/skeleton";

const CommonTable = <TData, TValue>({
  columns,
  data,
  fallback = "No results.",
  pagination = true,
  sort = true,
  filters,
  fallbackIcon,
  enableColumnVisibility = false,
  enableRowSelection = false,
  onRowSelectionChange,
  isLoading = false,
  tableWrapperClassName,
  filtersWrapperClassName,
  className,
  fallbackClassName,
  fallbackLabelClassName,
  filterClassName,
}: CommonTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedValue, setSelectedValue] = useState<Record<string, string[]>>(
    {},
  );
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const tableColumns = useMemo(
    () => getTableColumns(columns, enableRowSelection),
    [columns, enableRowSelection],
  );

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    ...(sort && { onSortingChange: setSorting }),
    ...(sort && { getSortedRowModel: getSortedRowModel() }),
    ...(filters && { onColumnFiltersChange: setColumnFilters }),
    ...(filters && { getFilteredRowModel: getFilteredRowModel() }),
    ...(enableColumnVisibility && {
      onColumnVisibilityChange: setColumnVisibility,
    }),
    ...(enableRowSelection && { onRowSelectionChange: setRowSelection }),
    state: {
      ...(sort && { sorting }),
      ...(filters && { columnFilters }),
      ...(enableColumnVisibility && { columnVisibility }),
      ...(enableRowSelection && { rowSelection }),
    },
  });

  useEffect(() => {
    if (!enableRowSelection) return;
    onRowSelectionChange?.(
      table.getSelectedRowModel().rows.map((row) => row.original),
    );
  }, [rowSelection, enableRowSelection, onRowSelectionChange, table]);

  if (!columns?.length || !data?.length) return null;

  return (
    <div className={cn("space-y-2 mx-2", tableWrapperClassName)}>
      {/* filters */}
      {(filters || enableColumnVisibility) && (
        <div
          className={cn(
            "flex justify-end items-center gap-2",
            filtersWrapperClassName,
          )}
        >
          {filters &&
            (Array.isArray(filters) ? filters : [filters]).map((filter, i) => (
              <div key={i}>
                {renderFilters(
                  filter,
                  table,
                  selectedValue[filter.key] ?? [],
                  (value) =>
                    setSelectedValue((prev) => ({
                      ...prev,
                      [filter.key]: value,
                    })),
                  filterClassName,
                )}
              </div>
            ))}
          {/* column visibility */}
          {enableColumnVisibility && (
            <CommonDropdown
              trigger={<CommonButton label="Columns" variant="outline" />}
              mode="checkboxes"
              options={[
                {
                  items: table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => ({
                      label: column.id,
                      value: column.id,
                      checked: column.getIsVisible(),
                      onCheckedChange: (checked: boolean) =>
                        column.toggleVisibility(!!checked),
                    })),
                },
              ]}
            />
          )}
        </div>
      )}
      <div className={cn("overflow-hidden rounded-md border", className)}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <>
                {[...Array(5)].map((_, i) => (
                  <TableRow key={i}>
                    {table.getVisibleLeafColumns().map((column) => (
                      <TableCell key={column.id}>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getVisibleLeafColumns().length}
                  className={cn("h-24 text-center", fallbackClassName)}
                >
                  <span
                    className={cn(
                      "flex flex-col justify-center items-center gap-2",
                      fallbackLabelClassName,
                    )}
                  >
                    {fallbackIcon && <RenderIcon src={fallbackIcon} />}
                    {fallback}
                  </span>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <CommonButton
            label="Previous"
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <CommonButton
            label="Next"
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </div>
      )}
    </div>
  );
};

export default CommonTable;
