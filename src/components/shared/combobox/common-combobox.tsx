import type { CommonComboboxProps } from "./common-combobox.types";
import { CommonLabel } from "../label";
import { useId } from "react";
import { cn } from "@/lib/utils";
import Multiple from "./components/multiple";
import Grouped from "./components/grouped";
import Default from "./components/default";

const CommonCombobox = (props: CommonComboboxProps) => {
  const generatedId = useId();
  const id = `${generatedId}-combobox`;
  const {
    label,
    labelClassName,
    placeholder,
    fallback = "No items found.",
    required,
    disabled,
    showClear,
    icon,
    className,
    contentClassName,
    chipClassName,
    ref,
  } = props;

  const content = (() => {
    switch (props.variant) {
      case "multiple":
        return (
          <Multiple
            id={id}
            options={props.options}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            className={className}
            fallback={fallback}
            value={props.value}
            onChange={props.onChange}
            chipClassName={chipClassName}
            contentClassName={contentClassName}
          />
        );
      case "grouped":
        return (
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
            value={props.value}
            onChange={props.onChange}
            ref={ref}
            contentClassName={contentClassName}
          />
        );
      case "default":
      case undefined:
        return (
          <Default
            id={id}
            options={props.options}
            placeholder={props.placeholder}
            disabled={disabled}
            showClear={showClear}
            className={className}
            icon={icon}
            fallback={fallback}
            value={props.value}
            onChange={props.onChange}
            ref={ref}
            required={required}
            contentClassName={contentClassName}
          />
        );
    }
  })();

  return (
    <>
      {label && (
        <CommonLabel
          htmlFor={id}
          label={label}
          className={cn("font-semibold", labelClassName)}
          required={required}
        />
      )}
      {content}
    </>
  );
};

export default CommonCombobox;
