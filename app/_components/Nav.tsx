import { ModeToggle } from "@/components/ui/mode-toggler";
import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

function Nav() {
  return (
    <div className="flex justify-end gap-12 items-center">
      <ModeToggle />
      <Button variant='outline'><LoginLink>Sign in</LoginLink></Button>
      <Button><RegisterLink>Sign up</RegisterLink></Button>
    </div>
  );
}

export default Nav;
