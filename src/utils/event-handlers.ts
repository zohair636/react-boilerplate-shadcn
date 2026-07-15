import type { PointerEvent } from "react";

export const preventTriggerPointerDown = (e: PointerEvent) => {
  e.preventDefault();
  e.stopPropagation();
};
