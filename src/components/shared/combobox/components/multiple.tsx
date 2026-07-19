import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import type {
  MultipleComboboxProps,
  SelectableItem,
} from "../common-combobox.types";
import { getOptionLabel, getOptionValue } from "../common-combobox.utils";

const Multiple = ({
  id,
  options,
  fallback,
  value,
  onChange,
  className,
  chipClassName,
  contentClassName,
  disabled,
  required,
  placeholder,
  ref,
}: MultipleComboboxProps) => {
  const anchor = useComboboxAnchor();

  const selectedItem = (value ?? [])
    .map((val) => options.find((opt) => getOptionValue(opt) === val))
    .filter((opt): opt is SelectableItem => opt !== undefined);
  return (
    <Combobox
      id={id}
      items={options}
      value={selectedItem}
      onValueChange={(val: SelectableItem[]) =>
        onChange?.(val.map(getOptionValue))
      }
      itemToStringValue={(item: SelectableItem) => getOptionLabel(item)}
      isItemEqualToValue={(item: SelectableItem, value: SelectableItem) =>
        getOptionValue(item) === getOptionValue(value)
      }
      multiple
    >
      <ComboboxChips ref={anchor} className="w-full">
        <ComboboxValue>
          {(values) => (
            <>
              {Array.isArray(values) &&
                values.map((value: SelectableItem) => (
                  <ComboboxChip
                    key={getOptionValue(value)}
                    className={chipClassName}
                  >
                    {getOptionLabel(value)}
                  </ComboboxChip>
                ))}
              <ComboboxChipsInput
                className={className}
                placeholder={values.length > 0 ? undefined : placeholder}
                disabled={disabled}
                required={required}
                ref={ref}
              />
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

export default Multiple;
