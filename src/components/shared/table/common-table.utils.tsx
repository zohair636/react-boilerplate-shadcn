import { cn } from "@/lib/utils";
import { CommonInput } from "../input";
import { CommonSelect } from "../select";
import type { FiltersConfig } from "./common-table.types";
import type { Table } from "@tanstack/react-table";
import { CommonButton } from "../button";
import { ChevronDown } from "lucide-react";
import { CommonDropdown } from "../dropdown";

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
        className={cn("max-w-sm", className)}
      />
    );
  }
  if (item?.type === "multi-select") {
    return (
      <CommonDropdown
        mode="checkboxes"
        trigger={
          <CommonButton
            label="Select Options"
            variant="outline"
            rightIcon={<ChevronDown />}
          />
        }
        options={[
          {
            items: item.options.map((option) => ({
              label: option.label,
              value: option.value,
              checked: selectedValue.includes(option.value),
              onCheckedChange: (checked: boolean) => {
                const updated = checked
                  ? [...selectedValue, option.value]
                  : selectedValue.filter((val) => val !== option.value);
                  onSelectValue(updated)
                  table.getColumn(item.key)?.setFilterValue(updated?.length ? updated : undefined)
              },
            })),
          },
        ]}
      />
    );
  }
};
