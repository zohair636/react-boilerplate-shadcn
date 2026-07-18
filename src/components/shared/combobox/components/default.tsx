import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "@/components/ui/input-group";
import { getOptionLabel, getOptionValue } from "../common-combobox.utils";
import type { DefaultComboboxProps } from "../common-combobox.types";

const Default = ({
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
}: DefaultComboboxProps) => {
  return (
    <Combobox
      id={id}
      items={options}
      value={value || null}
      onValueChange={(val) => onChange?.(val ? getOptionValue(val) : '')}
    >
      <ComboboxInput
        placeholder={placeholder}
        disabled={disabled}
        showClear={showClear}
        required={required}
        className={className}
        ref={ref}
      >
        {icon && <InputGroupAddon>{icon}</InputGroupAddon>}
      </ComboboxInput>
      <ComboboxContent>
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

export default Default;
