import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CommonTabsProps } from "./common-tabs.types";
import { RenderIcon } from "@/utils/icon-utils";

const CommonTabs = ({
  options,
  children,
  defaultValue,
  value,
  onValueChange,
  className,
  contentClassName,
  variant = "default",
  orientation = "horizontal",
}: CommonTabsProps) => {
  if (!options?.length) return null;

  return (
    <Tabs
      value={value}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      orientation={orientation}
    >
      <TabsList variant={variant} className={className}>
        {options.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            <RenderIcon src={option.icon} alt={option.label} />
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={value} className={contentClassName}>
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default CommonTabs;
