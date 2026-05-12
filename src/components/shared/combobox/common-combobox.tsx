import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import type { CommonComboboxProps, SelectableItem } from "./combobox.types";
import CommonLabel from "../label";
import { Activity, useId } from "react";
import { cn } from "@/lib/utils";
import { InputGroupAddon } from "@/components/ui/input-group";
import { getOptionLabel, getOptionValue } from "./common-combobox.utils";

const CommonCombobox = ({
  options,
  placeholder,
  fallback = "No items found.",
  required,
  disabled,
  showClear,
  icon,
  label,
  labelClassName,
  className,
  contentClassName,
  chipClassName,
  onChange,
  variant = "default",
}: CommonComboboxProps) => {
  const anchor = useComboboxAnchor();
  const generatedId = useId();
  const id = label ? `${generatedId}-combobox` : undefined;

  const renderItems = () => {
    if (variant === "default") {
      return (
        <Combobox id={id} items={options}>
          <ComboboxInput
            placeholder={placeholder}
            disabled={disabled}
            showClear={showClear}
            className={className}
          >
            <Activity mode={icon ? "visible" : "hidden"}>
              <InputGroupAddon>{icon}</InputGroupAddon>
            </Activity>
          </ComboboxInput>
          <ComboboxContent>
            <ComboboxEmpty>{fallback}</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem
                  key={getOptionValue(item)}
                  value={item}
                  onSelect={() => onChange?.(getOptionValue(item))}
                  className={contentClassName}
                >
                  {getOptionLabel(item)}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }
    if (variant === "multiple") {
      return (
        <Combobox
          id={id}
          items={options}
          itemToStringValue={(item: SelectableItem) => getOptionLabel(item)}
          multiple
        >
          <ComboboxChips ref={anchor} className="w-full">
            <ComboboxValue>
              {(values) => (
                <>
                  {Array.isArray(values) &&
                    values.map(
                      (value: SelectableItem) => (
                        <ComboboxChip
                          key={getOptionValue(value)}
                          className={chipClassName}
                        >
                          {getOptionLabel(value)}
                        </ComboboxChip>
                      ),
                    )}
                  <ComboboxChipsInput className={className} />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>{fallback}</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem
                  key={getOptionValue(item)}
                  value={item}
                  onSelect={() => onChange?.(getOptionValue(item))}
                  className={contentClassName}
                >
                  {getOptionLabel(item)}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }
    if (variant === "grouped") {
      return (
        <Combobox id={id} items={options}>
          <ComboboxInput
            placeholder={placeholder}
            disabled={disabled}
            showClear={showClear}
            className={className}
          >
            <Activity mode={icon ? "visible" : "hidden"}>
              <InputGroupAddon>{icon}</InputGroupAddon>
            </Activity>
          </ComboboxInput>
          <ComboboxContent>
            <ComboboxEmpty>{fallback}</ComboboxEmpty>
            <ComboboxList>
              {(group, index) => (
                <ComboboxGroup key={group.value} items={group.items}>
                  <ComboboxLabel>{group.value}</ComboboxLabel>
                  <ComboboxCollection>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                  {index < options.length - 1 && <ComboboxSeparator />}
                </ComboboxGroup>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }
  };

  if (!options?.length) return null;

  return (
    <>
      <Activity mode={label ? "visible" : "hidden"}>
        <CommonLabel
          htmlFor={id}
          label={label}
          className={cn("mb-2", labelClassName)}
          required={required}
        />
      </Activity>
      {renderItems()}
    </>
  );
};

export default CommonCombobox;
