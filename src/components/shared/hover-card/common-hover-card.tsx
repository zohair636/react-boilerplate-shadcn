import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { CommonHoverCardProps } from "./common-hover-card.types";

const CommonHoverCard = ({
  trigger,
  delay = 10,
  closeDelay = 10,
  children,
  className,
  side,
  align,
}: CommonHoverCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger delay={delay} closeDelay={closeDelay}>
        {trigger}
      </HoverCardTrigger>
      <HoverCardContent side={side} align={align} className={className}>
        {children}
      </HoverCardContent>
    </HoverCard>
  );
};

export default CommonHoverCard;
