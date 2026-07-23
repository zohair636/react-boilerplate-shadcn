import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CommonAccordionProps } from "./common-accordion.types";

const CommonAccordion = ({
  options,
  value,
  onValueChange,
  multiple,
  className,
  ...rest
}: CommonAccordionProps) => {
  if (!options?.length) return null;

  const normalizeValue =
    value === undefined ? undefined : Array.isArray(value) ? value : [value];

  const handleValueChange = (newValue: string | string[]) => {
    if (multiple) {
      onValueChange?.(newValue as string[]);
    } else {
      onValueChange?.(newValue as string);
    }
  };
  return (
    <Accordion
      multiple={multiple}
      value={normalizeValue}
      onValueChange={handleValueChange}
      className={className}
      {...rest}
    >
      {options.map((option) => (
        <AccordionItem key={option.value} value={option.value}>
          <AccordionTrigger render={option.trigger} />
          <AccordionContent>
            <p>{option.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CommonAccordion;
