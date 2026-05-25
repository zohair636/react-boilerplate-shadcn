import { Badge } from "@/components/ui/badge";
import type { CommonBadgeProps } from "./common-badge.types";
import { Spinner } from "@/components/ui/spinner";
import { RenderIcon } from "@/utils/icon-utils";

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
        leftIcon && <RenderIcon src={leftIcon} alt={label as string} />
      )}
      {label}
      {!isLoading && rightIcon && (
        <RenderIcon src={rightIcon} alt={label as string} />
      )}
    </Badge>
  );
};

export default CommonBadge;
