"use client";
import { ModeToggle } from "@/components/ui/mode-toggler";
import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

const Nav = () => {
  const { theme } = useTheme();

  return (
    <nav className="flex justify-between items-center py-2 md:py-0 px-4 sm:px-8 md:px-12 sticky z-0">
      <Image
        src={theme === "dark" ? "/logo-dark.webp" : "/logo.webp"}
        alt="Logo"
        height={400}
        width={400}
        className="h-16 md:h-24 w-40 md:w-56"
      />
      <div className="flex gap-1 md:gap-6 items-center">
        <Button
          variant="outline"
          className="px-4 border-2 border-secondary-dark dark:border-accent-dark rounded-lg text-lg font-sans font-semibold dark:hover:bg-transparent hover:bg-transparent"
        >
          <LoginLink>Login</LoginLink>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Nav;
