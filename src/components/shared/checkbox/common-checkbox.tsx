import type { CommonCheckboxProps } from "./common-checkbox.types";
import { GroupCheckbox } from "./components/grouped-checkbox";
import { DefaultCheckbox } from "./components/default-checkbox";

const CommonCheckbox = (props: CommonCheckboxProps) => {
  const {
    label,
    description,
    required,
    disabled,
    className,
    orientation = "horizontal",
    id,
  } = props;
  const isInvalid =
    !!required &&
    (Array.isArray(props.checked) ? !props.checked?.length : !props.checked);

  if (props.variant === "group") {
    if (!props.options?.length) return null;
    return (
      <GroupCheckbox
        id={id}
        label={label}
        description={description}
        options={props.options}
        checked={props.checked as string[] | undefined}
        onCheckedChange={props.onCheckedChange}
        required={required}
        disabled={disabled}
        isInvalid={isInvalid}
        className={className}
        orientation={orientation}
      />
    );
  }

  return (
    <DefaultCheckbox
      id={id}
      label={label}
      description={description}
      orientation={orientation}
      checked={props.checked}
      onCheckedChange={props.onCheckedChange}
      required={required}
      disabled={disabled}
      isInvalid={isInvalid}
      className={className}
    />
  );
};

export default CommonCheckbox;
