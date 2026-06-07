import type { ReactNode } from "react";

interface OptionsConfig {
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  value?: string;
  onSelect?: (value: string) => void
}

interface OptionsBaseConfig {
  heading: string;
  items: OptionsConfig[];
}

export interface CommonCommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placeholder?: string;
  fallback?: string;
  options: OptionsBaseConfig[];
  className?: string;
}
