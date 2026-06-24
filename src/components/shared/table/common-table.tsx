import type { CommonTableProps } from "./common-table.types";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type PaginationState,
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
  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: paginationProps?.limit ?? 10,
  });

  const tableColumns = useMemo(
    () => getTableColumns(columns, enableRowSelection),
    [columns, enableRowSelection],
  );

  useEffect(() => {
    if (!pagination) return;

    setPaginationState((prev) => ({
      ...prev,
      pageSize: paginationProps?.limit ?? prev.pageSize,
      pageIndex: 0,
    }));
  }, [pagination, paginationProps?.limit]);

  const handlePageChange = (page: number) => {
    paginationProps?.onPageChange?.(page);
    if (pagination) {
      setPaginationState((prev) => ({
        ...prev,
        pageIndex: Math.max(0, page - 1),
      }));
    }
  };

  const handlePageSizeChange = (value: string | null) => {
    paginationProps?.onPageSizeChange?.(value);
    if (pagination) {
      setPaginationState((prev) => ({
        ...prev,
        pageIndex: 0,
        pageSize: Number(value ?? prev.pageSize),
      }));
    }
  };

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    ...(pagination && { onPaginationChange: setPaginationState }),
    ...(sort && { onSortingChange: setSorting }),
    ...(sort && { getSortedRowModel: getSortedRowModel() }),
    ...(filters && { onColumnFiltersChange: setColumnFilters }),
    ...(filters && { getFilteredRowModel: getFilteredRowModel() }),
    ...(enableColumnVisibility && {
      onColumnVisibilityChange: setColumnVisibility,
    }),
    ...(enableRowSelection && { onRowSelectionChange: setRowSelection }),
    state: {
      ...(pagination && { pagination: paginationState }),
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

  if (!columns?.length) return null;

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
