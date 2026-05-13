import { Badge } from "@/components/ui/badge";
import type { CommonBadgeProps } from "./common-badge.types";
import { renderIcon } from "@/utils/icon-utils";
import { Spinner } from "@/components/ui/spinner";

const CommonBadge = ({
  label,
  variant,
  className,
  leftIcon,
  rightIcon,
  renderLink,
  isLoading,
}: CommonBadgeProps) => {
  if (label === "") return null;
  return (
    <Badge
      render={variant === "link" ? renderLink : undefined}
      variant={variant}
      className={className}
    >
      {isLoading && variant !== "link" ? (
        <Spinner data-icon="inline-start" />
      ) : (
        leftIcon && renderIcon(leftIcon)
      )}
      {label}
      {!isLoading && rightIcon && renderIcon(rightIcon)}
    </Badge>
  );
};

export default CommonBadge;
