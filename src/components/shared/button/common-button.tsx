import { RenderIcon } from "@/utils/icon-utils";
import { Button } from "../../ui/button";
import type { CommonButtonProps } from "./common-button.types";
import { Spinner } from "@/components/ui/spinner";

const CommonButton = ({
  label,
  leftIcon,
  rightIcon,
  leftIconAlt,
  rightIconAlt,
  ariaLabel,
  variant,
  isLoading,
  size,
  ref,
  spinnerColor = "white",
  labelClassName,
  leftIconClassName,
  rightIconClassName,
  ...rest
}: CommonButtonProps) => {
  const isLabel = label != null && label !== "";
  const typeofLabel = typeof label === "string" ? label : undefined;
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      disabled={Boolean(rest.disabled || isLoading)}
      aria-busy={isLoading}
      aria-label={ariaLabel ?? typeofLabel}
      type={rest.type ?? "button"}
      {...rest}
    >
      {!isLoading && leftIcon && (
        <RenderIcon
          src={leftIcon}
          alt={leftIconAlt ?? typeofLabel}
          className={leftIconClassName}
        />
      )}
      {isLoading && <Spinner color={spinnerColor} aria-hidden="true" />}
      {isLabel && <span className={labelClassName}>{label}</span>}
      {!isLoading && rightIcon && (
        <RenderIcon
          src={rightIcon}
          alt={rightIconAlt ?? typeofLabel}
          className={rightIconClassName}
        />
      )}
    </Button>
  );
};

export default CommonButton;
