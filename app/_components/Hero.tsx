"use client";
import AvatarList from "@/components/ui/avatarlist";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

function Hero() {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* writting */}
        <div className="mt-8">
          <h1 className="text-7xl font-extrabold text-gray-800 dark:text-gray-100 mb-8">
            Turn Ideas into Delicious Reality
          </h1>
          <h2 className="text-xl md:text-2xl leading-relaxed dark:text-gray-300 text-gray-700 tracking-wide max-w-2xl">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Your personal AI chef
            </span>{" "}
            is here! Get instant, detailed recipes with ingredients, prep times,
            shopping guides, and{" "}
            <span className="font-medium">restaurant-quality</span> plating
            designs — all in seconds.
          </h2>
          <Button className="mt-8 p-4 md:p-5 rounded-3xl bg-primary-dark dark:hover:bg-primary-light hover:bg-primary-dark text-gray-100 dark:text-gray-800 dark:bg-primary-light border-none md:text-lg text-base font-sans font-semibold shadow-none">
            <RegisterLink className="flex items-center">
              Get Started
            </RegisterLink>
          </Button>
        </div>
        {/* video */}
        <video autoPlay loop muted className="rounded-lg shadow-md mt-3">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <AvatarList/>
    </div>
  );
}

export default Hero;
