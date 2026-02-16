"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Compass,
  LogOut,
  Flame,
  Settings,
  Trophy,
  LogIn,
  User,
  icons,
  FlameKindling,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Goals", path: "/goals", icon: FlameKindling },
  { name: "Explore Challanges", path: "/explore", icon: Compass },
  { name: "Profile", path: "/profile", icon: User, mobileOnly: true },
];

export function AppSidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkRes = () => setIsDesktop(window.innerWidth >= 1024);
    checkRes();
    window.addEventListener("resize", checkRes);
    return () => window.removeEventListener("resize", checkRes);
  }, []);

  return (
    <motion.aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
      animate={{
        width: isDesktop ? (isHovered ? 260 : 80) : "100%",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 35 }}
      className={`
        /* Mobile: Bottom Fixed Bar */
        fixed bottom-0 left-0 z-50 h-16 flex flex-row items-center justify-around
        bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 px-6
        
        /* Desktop: Left Sticky Sidebar */
        lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-col lg:justify-between 
        lg:border-t-0 lg:border-r lg:px-0 lg:py-0 lg:overflow-hidden lg:bg-card
      `}
    >
      {/* 1. Header Area: Minimalist Brand */}
      <div className="hidden lg:block w-full p-5 border-b border-zinc-100 dark:border-zinc-800 overflow-hidden">
        <Link href="/" className="flex items-center gap-3 group min-w-[200px]">
          <div className="w-10 h-10 bg-zinc-900 dark:bg-zinc-100 flex flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 shadow-sm group-hover:shadow-md">
            <Flame className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            className="flex flex-col"
          >
            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-none">
              MeMatch
            </span>
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest mt-1">
              Consistency App
            </span>
          </motion.div>
        </Link>
      </div>

      {/* 2. Navigation Area: High-Density Layout */}
      <nav className="flex flex-row lg:flex-col items-center justify-around lg:justify-start w-full lg:flex-1 lg:p-3 lg:space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          if (item.mobileOnly && isDesktop) return null;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`
                flex items-center transition-all group relative
                p-2 rounded-lg lg:w-full lg:px-4 lg:py-2.5
                ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                }
              `}
            >
              {/* Thinner stroke and smaller size for professional look */}
              <item.icon
                className={`w-5 h-5 flex-shrink-0 stroke-[1.5] ${isActive ? "text-yellow-500" : ""}`}
              />

              <motion.span
                animate={{
                  opacity: isHovered && isDesktop ? 1 : 0,
                  display: isHovered && isDesktop ? "block" : "none",
                }}
                className="ml-3 font-semibold text-[13px] tracking-tight whitespace-nowrap"
              >
                {item.name}
              </motion.span>

              {/* Minimalist Indicator */}
              {isActive && isDesktop && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-1 h-5 bg-yellow-500 rounded-r-full"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* 3. Footer Area: Refined Profile Section */}
      <div className="hidden lg:block w-full p-4 border-t border-zinc-100 dark:border-zinc-800 overflow-hidden">
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-left">
                <Avatar className="w-8 h-8 flex-shrink-0 border border-zinc-200 dark:border-zinc-800">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Tejas" />
                  <AvatarFallback className="text-[10px] font-bold">
                    TC
                  </AvatarFallback>
                </Avatar>

                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-[12px] font-semibold text-zinc-900 dark:text-zinc-100 truncate leading-none">
                    Tejas Chavhan
                  </p>
                  <p className="text-[10px] font-medium text-zinc-500 mt-1 uppercase tracking-tighter">
                    Pro Plan
                  </p>
                </motion.div>
                <motion.div animate={{ opacity: isHovered ? 1 : 0 }}>
                  <Settings className="w-3.5 h-3.5 text-zinc-400" />
                </motion.div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              side="right"
              className="w-48 p-1 ml-2 shadow-xl border border-zinc-200 dark:border-zinc-800 rounded-lg"
            >
              <DropdownMenuItem className="text-[13px] font-medium rounded-md py-2 cursor-pointer">
                <Settings className="mr-2 h-4 w-4 stroke-[1.5]" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setIsLoggedIn(false)}
                className="text-[13px] font-medium text-red-500 rounded-md py-2 cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4 stroke-[1.5]" /> Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={() => setIsLoggedIn(true)}
            variant="outline"
            className="w-full h-9 text-xs font-semibold rounded-lg flex gap-2"
          >
            <LogIn size={14} />
            {isHovered && <span>Sign In</span>}
          </Button>
        )}
      </div>
    </motion.aside>
  );
}
