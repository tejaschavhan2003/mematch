"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/Layout/AppSideBar";
import { QuickGoalAccess } from "@/components/Home/QuickGoalAccess";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideLayout =
    pathname === "/" || pathname === "/sign-in" || pathname === "/sign-up";

  if (hideLayout) {
    return <main className="w-full">{children}</main>;
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <AppSidebar />
      <main className="flex-1 lg:pl-0 pb-24 lg:pb-0">{children}</main>
      <QuickGoalAccess />
    </div>
  );
}
