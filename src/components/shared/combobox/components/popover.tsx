import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox";
import type {
  PopoverComboboxProps,
  SelectableItem,
} from "../common-combobox.types";
import {
  getOptionLabel,
  getOptionValue,
  internalFilter,
} from "../common-combobox.utils";
import { ChevronDown, X } from "lucide-react";
import { preventTriggerPointerDown } from "@/utils/event-handlers";
import { useMemo, useState, type MouseEvent } from "react";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

const Popover = ({
  id,
  options,
  value,
  onChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  fallback = "No items found.",
  disabled,
  showClear = false,
  className,
  contentClassName,
  required,
  searchValue,
  onSearchChange,
  isLoading = false,
  ref,
}: PopoverComboboxProps) => {
  const isExternalSearch = onSearchChange !== undefined;
  const hasValue = Boolean(value);
  const [lastSelected, setLastSelected] = useState<SelectableItem | null>(null);
  const [prevValue, setPrevValue] = useState(value);

  const selectableOptions = useMemo(
    () => options.filter((option) => getOptionValue(option) !== ""),
    [options],
  );

  const foundInCurrentOptions = value
    ? (selectableOptions.find((opt) => getOptionValue(opt) === value) ?? null)
    : null;

  if (value !== prevValue) {
    setPrevValue(value);
    setLastSelected(foundInCurrentOptions ?? (value ? lastSelected : null));
  }

  const selectedItem =
    foundInCurrentOptions ??
    (value && lastSelected && getOptionValue(lastSelected) === value
      ? lastSelected
      : null);

  const handleClear = (e: MouseEvent) => {
    e.stopPropagation();
    setPrevValue("");
    setLastSelected(null);
    onChange?.("");
    if (isExternalSearch) {
      onSearchChange?.("");
    }
  };

  return (
    <Combobox
      id={id}
      items={selectableOptions}
      value={selectedItem}
      onValueChange={(val) => {
        onChange?.(val ? getOptionValue(val) : "");
      }}
      itemToStringLabel={(item: SelectableItem) => getOptionLabel(item)}
      itemToStringValue={(item: SelectableItem) => getOptionValue(item)}
      {...(isExternalSearch
        ? {
            inputValue: searchValue ?? "",
            onInputValueChange: onSearchChange,
            filter: null,
          }
        : {
            filter: internalFilter,
          })}
      isItemEqualToValue={(
        item: SelectableItem,
        selected: SelectableItem | null,
      ) =>
        selected !== null && getOptionValue(item) === getOptionValue(selected)
      }
      autoHighlight
    >
      <ComboboxTrigger
        disabled={disabled}
        className={cn(
          "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 text-sm font-normal shadow-xs transition-colors outline-none select-none",
          "data-placeholder:text-muted-foreground",
          "[&>svg:last-child]:hidden",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        <span className="flex min-w-0 flex-1 truncate text-left">
          <ComboboxValue placeholder={placeholder} />
        </span>
        {isLoading ? (
          <Spinner className="ml-auto size-4 shrink-0 opacity-50" />
        ) : showClear && hasValue && !disabled ? (
          <span
            role="button"
            tabIndex={0}
            aria-label="Clear selection"
            onPointerDown={preventTriggerPointerDown}
            onClick={handleClear}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClear(e as unknown as MouseEvent);
              }
            }}
            className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <X className="size-4 shrink-0 opacity-50" aria-hidden />
          </span>
        ) : (
          <ChevronDown className="size-4 shrink-0 opacity-50" aria-hidden />
        )}
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput
          ref={ref}
          showTrigger={false}
          showClear={false}
          disabled={disabled}
          required={required}
          placeholder={searchPlaceholder}
          className="w-auto"
        />
        <ComboboxEmpty>{fallback}</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem
              key={getOptionValue(item)}
              value={item}
              className={contentClassName}
            >
              {getOptionLabel(item)}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default Popover;
