export const Orientation = {
  horizontal: "horizontal",
  vertical: "vertical",
} as const;

export type OrientationType = (typeof Orientation)[keyof typeof Orientation];
