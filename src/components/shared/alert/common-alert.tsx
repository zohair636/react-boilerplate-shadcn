import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import type { CommonAlertProps } from "./common-alert.type";
import { Activity } from "react";
import { RenderIcon } from "@/utils/icon-utils";

const CommonAlert = ({
  icon,
  title,
  description,
  className,
  variant = "default",
  action,
}: CommonAlertProps) => {
  return (
    <Alert variant={variant} className={className}>
      <Activity mode={icon ? "visible" : "hidden"}>
        <RenderIcon src={icon} alt={title} />
      </Activity>
      <AlertTitle>{title}</AlertTitle>
      <Activity mode={description ? "visible" : "hidden"}>
        <AlertDescription>{description}</AlertDescription>
      </Activity>
      <Activity mode={action ? "visible" : "hidden"}>
        <AlertAction>{action}</AlertAction>
      </Activity>
    </Alert>
  );
};

export default CommonAlert;
