import type { OrientationType } from "@/types/orientation";
import type { ComponentProps } from "react";
import CommonButton from "../button/common-button";

export interface CommonButtonGroupProps {
  orientation?: OrientationType;
  leftButton?: ComponentProps<typeof CommonButton>;
  rightButton?: ComponentProps<typeof CommonButton>;
  separator?: boolean;
  mode?: "button" | "input";
  className?: string;
}

export type ButtonModeProps = {
  mode: "button";
  leftButton?: ComponentProps<typeof CommonButton>;
  rightButton?: ComponentProps<typeof CommonButton>;
  separator?: boolean;
};

export type InputModeProps = {
  mode: "input";
};
