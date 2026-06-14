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
import { Fragment, useState } from "react";
import { renderFilters } from "./common-table.utils";

const CommonTable = <TData, TValue>({
  columns,
  data,
  fallback = "No results.",
  pagination = true,
  sort = true,
  filters,
  className,
  fallbackClassName,
  filterClassName,
}: CommonTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedValue, setSelectedValue] = useState<Record<string, string[]>>(
    {},
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    ...(sort && { onSortingChange: setSorting }),
    ...(sort && { getSortedRowModel: getSortedRowModel() }),
    ...(filters && { onColumnFiltersChange: setColumnFilters }),
    ...(filters && { getFilteredRowModel: getFilteredRowModel() }),
    state: {
      ...(sort && { sorting }),
      ...(filters && { columnFilters }),
    },
  });

  if (!columns?.length) return null;

  return (
    <div>
      {filters &&
        (Array.isArray(filters) ? filters : [filters]).map((filter, i) => (
          <Fragment key={i}>
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
          </Fragment>
        ))}
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
