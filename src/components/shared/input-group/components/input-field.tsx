import {
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { InputGroupInputFieldProps } from "../common-input-group.types";

const InputField = ({
  fieldId,
  placeholder,
  type,
  disabled,
  required,
  error,
  errorId,
  value,
  onChange,
  startAlign,
  endAlign,
  addonStart,
  addonEnd,
  inputClassName
}: InputGroupInputFieldProps) => {
  return (
    <>
      {addonStart && (
        <InputGroupAddon align={startAlign ?? "inline-start"}>{addonStart}</InputGroupAddon>
      )}
      <InputGroupInput
        id={fieldId}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        required={required}
        aria-required={required}
        aria-disabled={disabled}
        aria-invalid={!!error}
        aria-errormessage={errorId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClassName}
      />
      {addonEnd && (
        <InputGroupAddon align={endAlign ?? "inline-end"}>{addonEnd}</InputGroupAddon>
      )}
    </>
  );
};

export default InputField;
