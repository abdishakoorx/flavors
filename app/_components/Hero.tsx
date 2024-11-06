"use client";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

function Hero() {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* writting */}
        <div>
          <h1 className="text-7xl font-extrabold text-gray-700 dark:text-gray-300 mb-8">
            Create your recipes with just few clicks.
          </h1>
          <h2 className="font-normal text-xl dark:text-gray-500 text-gray-600 tracking-wide">
            Create detailed recipes with the help of the latest generation of
            AI. You will get recipe ingredients, time to finish preparing the
            meal, places to get the ingredients and picture for plating
            inspiration.
          </h2>
          <Button className="mt-8 p-4 md:p-5 rounded-3xl bg-primary-dark dark:hover:bg-primary-light hover:bg-primary-dark text-gray-100 dark:text-gray-800 dark:bg-primary-light border-none md:text-lg text-base font-sans font-semibold shadow-none">
            <RegisterLink className="flex items-center">
              Get Started
            </RegisterLink>
          </Button>
        </div>
        {/* video */}
        <div>
          <video autoPlay loop muted className="rounded-lg shadow-md">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
