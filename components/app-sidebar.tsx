"use client";
import * as React from "react";
import {
  HelpCircle,
  Phone,
  Settings,
  BookOpen,
  ShoppingCart,
  Calendar,
  ChefHat,
  Utensils,
  Shuffle,
  TrendingUp,
  Plus,
  Leaf
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useTheme } from "next-themes";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Quick Actions",
      url: "#",
      icon: Plus,
      items: [
        {
          title: "New Recipe",
          url: "/create-recipe",
        },
        {
          title: "Meal Planner",
          url: "/meal-planner",
        },
      ],
    },
    {
      title: "On-the-Go Tools",
      url: "#",
      icon: Utensils,
      items: [
        {
          title: "Create Shopping List",
          url: "/shopping-list",
        },
        {
          title: "Dietary Settings",
          url: "/preferences",
        },
      ],
    },
    {
      title: "Educational Resources",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Cooking Tips",
          url: "/cooking-tips",
        },
        {
          title: "Ingredient Guide",
          url: "/ingredient-guide",
        },
      ],
    },
    {
      title: "Explore Recipes",
      url: "#",
      icon: ChefHat,
      items: [
        {
          title: "Random Recipe",
          url: "/random-recipe",
        },
        {
          title: "Popular Picks",
          url: "/popular",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "FAQ",
      url: "/faq",
      icon: HelpCircle,
    },
    {
      title: "Support",
      url: "/support",
      icon: Phone,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<"div">) {
  const { isAuthenticated, isLoading, user } = useKindeAuth();
  const { theme } = useTheme();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b">
        <div className="flex h-14 items-center px-4">
          {theme === 'dark' ? (
            <Image
              src="/logo-dark.png"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2"
            />
          ) : (
            <Image
              src="/logo-light.png"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2"
            />
          )}
          <span className="text-lg font-semibold">Recipe Hub</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      
      <SidebarFooter>
        {isAuthenticated && !isLoading && (
          <NavUser
            user={{
              name: data.user.name,
              email: data.user.email,
              avatar: data.user.avatar,
            }}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}