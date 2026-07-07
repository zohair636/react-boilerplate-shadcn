import type { CommonComboboxProps } from "./common-combobox.types";
import { CommonLabel } from "../label";
import { useId } from "react";
import { cn } from "@/lib/utils";
import Multiple from "./components/multiple";
import Grouped from "./components/grouped";
import Default from "./components/default";

const CommonCombobox = (props: CommonComboboxProps) => {
  const {
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
    ref,
  } = props;
  const generatedId = useId();
  const id = `${generatedId}-combobox`;

  return (
    <>
      {label && (
        <CommonLabel
          htmlFor={id}
          label={label}
          className={cn("mb-2", labelClassName)}
          required={required}
        />
      )}

      {(!props.variant || props.variant === "default") && (
        <Default
          id={id}
          options={props.options}
          placeholder={props.placeholder}
          disabled={disabled}
          showClear={showClear}
          className={className}
          icon={icon}
          fallback={fallback}
          onChange={props.onChange}
          ref={ref}
          required={required}
          contentClassName={contentClassName}
        />
      )}

      {props.variant === "multiple" && (
        <Multiple
          id={id}
          options={props.options}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          className={className}
          fallback={fallback}
          onChange={props.onChange}
          chipClassName={chipClassName}
          contentClassName={contentClassName}
        />
      )}

      {props.variant === "grouped" && (
        <Grouped
          id={id}
          options={props.options}
          placeholder={placeholder}
          fallback={fallback}
          disabled={disabled}
          required={required}
          showClear={showClear}
          className={className}
          icon={icon}
          onChange={props.onChange}
          ref={ref}
          contentClassName={contentClassName}
        />
      )}
    </>
  );
};

export default CommonCombobox;
