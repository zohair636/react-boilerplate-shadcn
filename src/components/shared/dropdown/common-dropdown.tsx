import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CommonDropdownProps } from "./common-dropdown-types";
import { cn } from "@/lib/utils";
import DefaultDropdown from "./components/default-dropdown";
import CheckboxesDropdown from "./components/checkboxes-dropdown";
import RadioGroupsDropdown from "./components/radio-groups-dropdown";

const CommonDropdown = (props: CommonDropdownProps) => {
  const { mode, options, trigger, className, itemClassName } = props;

  if (!options?.length) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-auto max-w-56", className)}>
        {mode === "default" && (
          <DefaultDropdown
            options={options}
            itemClassName={itemClassName}
            className={className}
          />
        )}
        {mode === "checkboxes" && (
          <CheckboxesDropdown options={options} itemClassName={itemClassName} />
        )}
        {mode === "radio-groups" && (
          <RadioGroupsDropdown
            options={options}
            value={props.value}
            onValueChange={props.onValueChange}
            itemClassName={itemClassName}
          />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CommonDropdown;
