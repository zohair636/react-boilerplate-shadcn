import { Activity, forwardRef } from "react";
import { Button } from "../../ui/button";
import type { CommonButtonProps } from "./types";
import { Spinner } from "@/components/ui/spinner";
import { renderIcon } from "@/utils/icon-utils";

const CommonButton = forwardRef<HTMLButtonElement, CommonButtonProps>(
  (
    { label, leftIcon, rightIcon, tooltip, variant, isLoading, size, ...rest },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        title={tooltip}
        variant={variant}
        size={size}
        disabled={isLoading}
        {...rest}
      >
        <Activity mode={leftIcon && !isLoading ? "visible" : "hidden"}>
          {renderIcon(leftIcon)}
        </Activity>
        <Activity mode={isLoading ? "visible" : "hidden"}>
          <Spinner color="white" />
        </Activity>
        {label}
        <Activity mode={rightIcon && !isLoading ? "visible" : "hidden"}>
          {renderIcon(rightIcon)}
        </Activity>
      </Button>
    );
  },
);

CommonButton.displayName = "CommonButton";

export default CommonButton;
