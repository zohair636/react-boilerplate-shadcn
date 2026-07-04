import {
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { RenderIcon } from "@/utils/icon-utils";
import type { SharedFieldProps } from "../common-input-group.types";

const TextareaField = ({
  fieldId,
  placeholder,
  disabled,
  required,
  error,
  errorId,
  value,
  onChange,
  icon,
  align,
}: SharedFieldProps) => {
  return (
    <>
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
      <InputGroupAddon align={align}>
        <RenderIcon src={icon} />
      </InputGroupAddon>
    </>
  );
};

export default TextareaField;
