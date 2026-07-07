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
  return (
    <Combobox
      id={id}
      items={options}
      itemToStringValue={(item: SelectableItem) => getOptionLabel(item)}
      multiple
      onValueChange={(value: SelectableItem[]) =>
        onChange?.(value.map(getOptionValue))
      }
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
