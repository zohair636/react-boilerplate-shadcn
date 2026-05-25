import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import type { CommonAlertProps } from "./common-alert.type";
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
      {icon && <RenderIcon src={icon} alt={title} />}
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
      {action && <AlertAction>{action}</AlertAction>}
    </Alert>
  );
};

export default CommonAlert;
