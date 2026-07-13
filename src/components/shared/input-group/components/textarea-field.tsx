import {
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import type { InputGroupTextareaFieldProps } from "../common-input-group.types";

const TextareaField = ({
  fieldId,
  placeholder,
  disabled,
  required,
  error,
  errorId,
  value,
  onChange,
  addonStart,
  addonEnd,
  startAlign,
  endAlign,
}: InputGroupTextareaFieldProps) => {
  return (
    <>
      {addonStart && (
        <InputGroupAddon align={startAlign ?? "block-start"}>
          {addonStart}
        </InputGroupAddon>
      )}
      <InputGroupTextarea
        id={fieldId}
        placeholder={placeholder}
        disabled={disabled}
        aria-required={required}
        aria-disabled={disabled}
        aria-invalid={!!error}
        aria-errormessage={errorId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {addonEnd && (
        <InputGroupAddon align={endAlign ?? "block-end"}>
          {addonEnd}
        </InputGroupAddon>
      )}
    </>
  );
};

export default TextareaField;
