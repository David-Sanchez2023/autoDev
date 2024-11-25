import type { ToOptions } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface NavigationItem {
  icon: ReactNode;
  label: string;
  route: ToOptions;
  hasAccess?: boolean;
}
