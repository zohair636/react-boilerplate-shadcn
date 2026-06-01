import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { CommonNavigationMenuProps } from "./common-navigation-menu.types";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { RenderIcon } from "@/utils/icon-utils";

const CommonNavigationMenu = ({
  trigger,
  options,
  className,
  contentClassName,
  titleClassName,
  descriptionClassName,
}: CommonNavigationMenuProps) => {
  if (!options?.length) return null;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className={className}>
              {options?.map((option, index) => (
                <NavigationMenuLink
                  key={`${option.title}-${index}`}
                  render={
                    <Link
                      to={option.href || "/"}
                      className={cn(
                        "flex flex-col gap-1 items-start text-sm h-fit",
                        contentClassName,
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-2",
                          "leading-none font-medium",
                          titleClassName,
                        )}
                      >
                        {option.icon && <RenderIcon src={option.icon} />}
                        {option.title}
                      </div>
                      {option.description && (
                        <div
                          className={cn(
                            "line-clamp-2 text-muted-foreground",
                            descriptionClassName,
                          )}
                        >
                          {option.description}
                        </div>
                      )}
                    </Link>
                  }
                />
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CommonNavigationMenu;
