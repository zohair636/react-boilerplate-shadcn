import type { ComponentProps, ReactNode } from "react";
import CommonButton from "../button/common-button";
import { CommonDropdown } from "../dropdown";
import { CommonPopover } from "../popover";
import { CommonInput } from "../input";
import { ButtonGroup } from "@/components/ui/button-group";

export type ButtonGroupItem =
  | {
      type: "button";
      key: string;
      props: ComponentProps<typeof CommonButton>;
    }
  | {
      type: "dropdown";
      key: string;
      props: ComponentProps<typeof CommonDropdown>;
    }
  | {
      type: "popover";
      key: string;
      props: ComponentProps<typeof CommonPopover>;
    }
  | {
      type: "input";
      key: string;
      props: ComponentProps<typeof CommonInput>;
    }
  | {
      type: "separator";
      key: string;
    }
  | {
      type: "custom";
      key: string;
      render: () => ReactNode;
    };

export interface CommonButtonGroupProps extends Omit<
  ComponentProps<typeof ButtonGroup>,
  "children"
> {
  items: ButtonGroupItem[];
  widthSeparators?: boolean;
}
