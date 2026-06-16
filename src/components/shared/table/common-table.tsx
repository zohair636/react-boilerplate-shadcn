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
import { useState } from "react";
import { renderFilters } from "./common-table.utils";
import { CommonDropdown } from "../dropdown";

const CommonTable = <TData, TValue>({
  columns,
  data,
  fallback = "No results.",
  pagination = true,
  sort = true,
  filters,
  enableColumnVisibility = false,
  tableWrapperClassName,
  filtersWrapperClassName,
  className,
  fallbackClassName,
  filterClassName,
}: CommonTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedValue, setSelectedValue] = useState<Record<string, string[]>>(
    {},
  );
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    ...(sort && { onSortingChange: setSorting }),
    ...(sort && { getSortedRowModel: getSortedRowModel() }),
    ...(filters && { onColumnFiltersChange: setColumnFilters }),
    ...(filters && { getFilteredRowModel: getFilteredRowModel() }),
    ...(enableColumnVisibility && {
      onColumnVisibilityChange: setColumnVisibility,
    }),
    state: {
      ...(sort && { sorting }),
      ...(filters && { columnFilters }),
      ...(enableColumnVisibility && { columnVisibility }),
    },
  });

  if (!columns?.length) return null;

  return (
    <div className={cn("space-y-2 mx-2", tableWrapperClassName)}>
      {/* filters */}
      {filters && (
        <div
          className={cn(
            "flex justify-end items-center gap-2",
            filtersWrapperClassName,
          )}
        >
          {(Array.isArray(filters) ? filters : [filters]).map((filter, i) => (
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
        </div>
      )}
      {/* column visibility */}
      {enableColumnVisibility && (
        <CommonDropdown
          trigger={<CommonButton label="Columns" variant="outline" />}
          mode="checkboxes"
          options={[
            {
              items: table
                .getAllColumns()
                .filter((columns) => columns.getCanHide())
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
            {table.getRowModel().rows?.length ? (
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
                  colSpan={columns.length}
                  className={cn("h-24 text-center", fallbackClassName)}
                >
                  {fallback}
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
