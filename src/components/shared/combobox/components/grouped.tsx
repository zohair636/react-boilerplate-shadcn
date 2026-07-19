import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "@/components/ui/input-group";
import type { GroupedComboboxProps } from "../common-combobox.types";

const Grouped = ({
  id,
  options,
  placeholder,
  disabled,
  showClear,
  className,
  icon,
  fallback,
  value,
  onChange,
  ref,
  required,
  contentClassName,
}: GroupedComboboxProps) => {
  return (
    <Combobox
      id={id}
      items={options}
      value={value}
      onValueChange={(val: string | null) => {
        onChange?.(val ?? "");
      }}
      itemToStringValue={(item: string) => item}
    >
      <ComboboxInput
        placeholder={placeholder}
        disabled={disabled}
        showClear={showClear}
        className={className}
        ref={ref}
        required={required}
      >
        {icon && <InputGroupAddon>{icon}</InputGroupAddon>}
      </ComboboxInput>
      <ComboboxContent>
        <ComboboxEmpty>{fallback}</ComboboxEmpty>
        <ComboboxList>
          {(group, index) => (
            <ComboboxGroup key={group.value} items={group.items}>
              {index > 0 && <ComboboxSeparator />}
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem
                    key={`${group.value}-${item}`}
                    value={item}
                    className={contentClassName}
                  >
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default Grouped;
