import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-zinc-700 w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Image
            src={"/logo-dark.webp"}
            alt="Logo"
            height={400}
            width={400}
            className="h-16 md:h-24 w-40 md:w-56"
          />

          <div className="flex gap-6 items-center justify-center">
            <Image src={'/facebook.png'} alt="facebook" width={28} height={28} className="" />
            <Image src={'/twitter.png'} alt="twitter" width={28} height={28} className="" />
            <Image src={'/linkedin.png'} alt="linkedin" width={28} height={28} className="" />
            <Image src={'/youtube.png'} alt="youtube" width={28} height={28} className="" />
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
