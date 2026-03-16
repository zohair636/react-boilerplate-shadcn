import { SIDEBAR_DESKTOP_BREAKPOINT_PX } from "@/constants/break-points";
import { useState, useEffect, useCallback } from "react";

export const useIsMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${SIDEBAR_DESKTOP_BREAKPOINT_PX}px)`,
    );

    const handleChange = () => {
      const isDesktop = mediaQuery.matches;
      setIsMobile(!isDesktop);
      if (isDesktop) {
        setSidebarOpen(false);
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return {
    sidebarOpen,
    setSidebarOpen,
    isMobile,
    openSidebar,
    closeSidebar,
  };
}
