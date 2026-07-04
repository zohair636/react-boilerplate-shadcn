import { InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { RenderIcon } from "@/utils/icon-utils";
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
  icon,
  align,
}: InputGroupInputFieldProps) => {
  return (
    <>
      <InputGroupInput
        id={fieldId}
        placeholder={placeholder}
        type={type}
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

export default InputField;
