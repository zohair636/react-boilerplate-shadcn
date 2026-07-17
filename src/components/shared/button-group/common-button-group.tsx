import type { CommonButtonGroupProps } from "./common-button-group.types";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import CommonButton from "../button/common-button";

const CommonButtonGroup = ({
  orientation = "horizontal",
  leftButton,
  rightButton,
  separator = false,
  className,
  ...rest
}: CommonButtonGroupProps) => {
  return (
    <ButtonGroup orientation={orientation} className={className} {...rest}>
      <CommonButton {...leftButton} />
      {separator && <ButtonGroupSeparator />}
      <CommonButton {...rightButton} />
    </ButtonGroup>
  );
};

export default CommonButtonGroup;
