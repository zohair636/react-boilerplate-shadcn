import { Button } from "../../ui/button";
import type { CommonButtonProps } from "./common-button.types";
import { Spinner } from "@/components/ui/spinner";
import { renderIcon } from "@/utils/icon-utils";

const CommonButton = ({
  label,
  leftIcon,
  rightIcon,
  tooltip,
  variant,
  isLoading,
  size,
  ref,
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
      {leftIcon && !isLoading && renderIcon(leftIcon)}
      {isLoading && <Spinner color="white" />}
      {label}
      {rightIcon && !isLoading && renderIcon(rightIcon)}
    </Button>
  );
};

export default CommonButton;
