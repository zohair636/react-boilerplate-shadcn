export interface CommonAvatarProps {
  src?: string;
  fallback?: string | null;
  badge?: boolean;
  className?: string;
  badgeClassName?: string;
  variant?: "default" | "group";
  avatarList?: { src?: string; fallback?: string | null }[];
  size?: "default" | "lg" | "sm";
}
