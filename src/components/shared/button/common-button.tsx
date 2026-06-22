import { RenderIcon } from "@/utils/icon-utils";
import { Button } from "../../ui/button";
import type { CommonButtonProps } from "./common-button.types";
import { Spinner } from "@/components/ui/spinner";

const CommonButton = ({
  label,
  leftIcon,
  rightIcon,
  tooltip,
  variant,
  isLoading,
  size,
  ref,
  spinnerColor = "white",
  labelClassName,
  ...rest
}: CommonButtonProps) => {
  return (
    <Button
      ref={ref}
      title={tooltip}
      variant={variant}
      size={size}
      disabled={isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {leftIcon && !isLoading && (
        <RenderIcon src={leftIcon} alt={label as string} />
      )}
      {isLoading && <Spinner color={spinnerColor} />}
      {label != null && label !== "" && (
        <span className={labelClassName}>{label}</span>
      )}
      {rightIcon && !isLoading && (
        <RenderIcon src={rightIcon} alt={label as string} />
      )}
    </Button>
  );
};

export default CommonButton;
