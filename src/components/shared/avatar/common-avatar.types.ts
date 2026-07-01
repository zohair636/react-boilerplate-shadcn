export interface CommonAvatarProps {
  src?: string;
  fallback?: string;
  badge?: boolean;
  className?: string;
  badgeClassName?: string;
  variant?: "default" | "group";
  avatarList?: { src?: string; fallback?: string }[];
  size?: "default" | "lg" | "sm";
}

export type SingleAvatarProps = Pick<
  CommonAvatarProps,
  "src" | "fallback" | "badge" | "className" | "badgeClassName" | "size"
>;

export type GroupAvatarProps = Pick<
  CommonAvatarProps,
  "avatarList" | "className"
>;
