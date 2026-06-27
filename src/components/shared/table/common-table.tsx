import type { CommonTableProps } from "./common-table.types";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type OnChangeFn,
  type RowSelectionState,
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
import { useMemo, useState } from "react";
import { getTableColumns, renderFilters } from "./common-table.utils";
import { CommonDropdown } from "../dropdown";
import { RenderIcon } from "@/utils/icon-utils";
import { Skeleton } from "@/components/ui/skeleton";
import { CommonPagination } from "../pagination";

const CommonTable = <TData, TValue>({
  columns,
  data,
  fallback = "No results.",
  pagination = true,
  sort = true,
  paginationProps,
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
  const [pageIndex, setPageIndex] = useState(0);
  const paginationState = {
    pageIndex,
    pageSize: paginationProps?.limit ?? 10,
  };

  const tableColumns = useMemo(
    () => getTableColumns(columns, enableRowSelection),
    [columns, enableRowSelection],
  );

  const handlePageChange = (page: number) => {
    paginationProps?.onPageChange?.(page);
    if (pagination) {
      setPageIndex(Math.max(0, page - 1));
    }
  };

  const handlePageSizeChange = (value: string | null) => {
    paginationProps?.onPageSizeChange?.(value);
    if (pagination) {
      setPageIndex(0);
    }
  };

  const handleRowSelectionChange: OnChangeFn<RowSelectionState> = (updater) => {
    setRowSelection((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;

      if (enableRowSelection) {
        const selectedRows = data.filter((_, index) => next[index]);
        onRowSelectionChange?.(selectedRows);
      }
      return next;
    });
  };

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    ...(pagination && {
      onPaginationChange: (updater) => {
        const next =
          typeof updater === "function" ? updater(paginationState) : updater;
        setPageIndex(next.pageIndex);
      },
    }),
    ...(sort && { onSortingChange: setSorting }),
    ...(sort && { getSortedRowModel: getSortedRowModel() }),
    ...(filters && { onColumnFiltersChange: setColumnFilters }),
    ...(filters && { getFilteredRowModel: getFilteredRowModel() }),
    ...(enableColumnVisibility && {
      onColumnVisibilityChange: setColumnVisibility,
    }),
    ...(enableRowSelection && {
      onRowSelectionChange: handleRowSelectionChange,
    }),
    state: {
      ...(pagination && { pagination: paginationState }),
      ...(sort && { sorting }),
      ...(filters && { columnFilters }),
      ...(enableColumnVisibility && { columnVisibility }),
      ...(enableRowSelection && { rowSelection }),
    },
  });

  if (!columns?.length) return null;

  const skeletonLoaderSize = Math.min(table.getState().pagination.pageSize, 5);

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
        {enableRowSelection && ( //only for screen readers
          <output aria-live="polite" className="sr-only">
            {table.getSelectedRowModel().rows.length} row(s) selected
          </output>
        )}
        {/* only for screen readers */}
        <output aria-live="polite" className="sr-only">
          {isLoading ? "Table data is loading" : "Table data loaded"}
        </output>
        <Table aria-busy={isLoading}>
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
                {[...Array(skeletonLoaderSize)].map((_, i) => (
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
                  aria-selected={row.getIsSelected()}
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
                  aria-label="No data available"
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
      {pagination &&
        paginationProps &&
        (paginationProps.mode === "default" ? (
          <CommonPagination
            {...paginationProps}
            records={data}
            totalRecords={data.length}
            currentPage={table.getState().pagination.pageIndex + 1}
            limit={table.getState().pagination.pageSize}
            onPageChange={handlePageChange}
            onPrev={() => table.previousPage()}
            onNext={() => table.nextPage()}
            canPrev={table.getCanPreviousPage()}
            canNext={table.getCanNextPage()}
          />
        ) : (
          <CommonPagination
            {...paginationProps}
            records={data}
            totalRecords={data.length}
            currentPage={table.getState().pagination.pageIndex + 1}
            limit={table.getState().pagination.pageSize}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        ))}
    </div>
  );
};

export default CommonTable;
