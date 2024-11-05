import { ModeToggle } from "@/components/ui/mode-toggler";
import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Nav() {
  return (
    <div className="flex justify-between px-4 md:px-8 lg:px-12 items-center p-6">
      <div>
        <Image
          src={"/logo.webp"}
          alt="Logo"
          height={400}
          width={400}
          className="h-8 md:h-10 w-40 md:w-56"
        />
      </div>

      <div className="flex gap-2 md:gap-6 items-center">
        <Button className="p-4 md:p-5 rounded-3xl bg-primary-dark dark:hover:bg-accent hover:bg-primary-dark text-gray-100 dark:text-gray-800 dark:bg-primary-light border-none md:text-lg text-base font-sans font-semibold shadow-none">
          <RegisterLink>Register</RegisterLink>
        </Button>
        <Button
          variant="outline"
          className="p-4 md:p-5 border-none rounded-3xl text-lg font-sans font-semibold dark:hover:bg-transparent hover:bg-transparent shadow-none"
        >
          <LoginLink>Login</LoginLink>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Nav;
