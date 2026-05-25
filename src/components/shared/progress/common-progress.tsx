import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import type { CommonProgressProps } from "./common-progress.types";

const CommonProgress = ({
  value,
  label,
  max = 100,
  min = 0,
  className,
}: CommonProgressProps) => {
  if (value === undefined || value === null) return null;

  return (
    <Progress value={value} max={max} min={min} className={className}>
      {label && (
        <>
          <ProgressLabel>{label}</ProgressLabel>
          <ProgressValue />
        </>
      )}
    </Progress>
  );
};

export default CommonProgress;
