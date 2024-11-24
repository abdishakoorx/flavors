"use client";

import * as React from "react";
import {
  BookOpen,
  Command,
  Frame,
  LifeBuoy,
  Map,
  Send,
  ShoppingBasket,
  SquareTerminal,
  Weight,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/in",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Tutorials",
          url: "/in",
        },
      ],
    },
    {
      title: "Meals",
      url: "/in/meal-planner",
      icon: ShoppingBasket,
      items: [
        {
          title: "Meal Planner",
          url: "/in/meal-planner",
        },
        {
          title: "Grocery Shooper",
          url: "/in/grocery-shopper",
        },
        {
          title: "Recipe Builder",
          url: "/in/recipe-builder",
        },
      ],
    },
    {
      title: "Blogs",
      url: "/in/blogs",
      icon: BookOpen,
    },
  ],
  projects: [
    {
      name: "Nutritionist's Archive",
      icon: Frame,
    },
    {
      name: "Gym bros",
      icon: Weight,
    },
    {
      name: "Tailored Cuisines",
      icon: Map,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/in",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/in",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isAuthenticated, isLoading } = useKindeAuth();
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={'/in'}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Fatty</span>
                  <span className="truncate text-xs">Sauce</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {isAuthenticated && !isLoading && <NavUser />}
      </SidebarFooter>
    </Sidebar>
  );
}
