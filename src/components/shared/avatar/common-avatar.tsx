import { useId } from "react";
import type { CommonAvatarProps } from "./common-avatar.types";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

const CommonAvatar = ({
  src,
  fallback,
  badge,
  className,
  badgeClassName,
  variant = "default",
  avatarList,
  size = "default",
}: CommonAvatarProps) => {
  const generateId = useId();

  if (!src && variant === "default") return null;
  if (variant === "group" && !avatarList?.length) return null;

  const renderAvatar = () => {
    if (variant === "default") {
      return (
        <Avatar size={size}>
          <AvatarImage
            src={src}
            alt={`${generateId}-${src}`}
            className={className}
          />
          <AvatarFallback>{fallback}</AvatarFallback>
          {badge && <AvatarBadge className={badgeClassName} />}
        </Avatar>
      );
    }
    if (variant === "group") {
      return (
        <AvatarGroup>
          {avatarList?.map((avatar) => (
            <Avatar key={`${generateId}-${avatar.src}`}>
              <AvatarImage
                src={avatar.src}
                alt={`${generateId}-${avatar.src}`}
                className={className}
              />
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      );
    }
  };

  return <>{renderAvatar()}</>;
};

export default CommonAvatar;
