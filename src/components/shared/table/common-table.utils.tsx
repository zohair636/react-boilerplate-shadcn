import { cn } from "@/lib/utils";
import { CommonCheckbox } from "../checkbox";
import { CommonInput } from "../input";
import { CommonSelect } from "../select";
import type { FiltersConfig } from "./common-table.types";
import type { Table } from "@tanstack/react-table";

export const renderFilters = <TData,>(
  item: FiltersConfig,
  table: Table<TData>,
  selectedValue: string[],
  onSelectValue: (value: string[]) => void,
  className?: string,
) => {
  if (item.type === "search") {
    return (
      <CommonInput
        placeholder={item.placeholder}
        value={(table.getColumn(item.key)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(item.key)?.setFilterValue(event.target.value)
        }
        className={cn("max-w-sm", className)}
      />
    );
  }
  if (item.type === "status") {
    return (
      <CommonSelect
        options={item?.options}
        value={(table.getColumn(item?.key)?.getFilterValue() as string) ?? ""}
        onValueChange={(event) =>
          table.getColumn(item?.key)?.setFilterValue(event)
        }
        className={className}
      />
    );
  }
  if (item?.type === "multi-select") {
    return (
      <CommonCheckbox
        options={item.options}
        label={item?.key}
        checked={selectedValue}
        onCheckedChange={(updated) => {
          const value = updated as string[];
          onSelectValue(value);
          table
            .getColumn(item?.key)
            ?.setFilterValue(value?.length ? value : undefined);
        }}
        variant="group"
        className={className}
      />
    );
  }
};
