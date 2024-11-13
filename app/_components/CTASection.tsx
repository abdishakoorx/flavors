"use client"
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

function CTASection() {
  return (
    <section className="overflow-hidden bg-[url(/cta.png)] bg-cover bg-center bg-no-repeat rounded-lg">
      <div className="dark:bg-gradient-to-r dark:from-black/60 dark:to-black/40 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Transform Your Cooking Experience with AI
          </h2>

          <p className="hidden max-w-xl mx-auto text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Join our early access program and be among the first to experience
            the future of cooking. Create personalized recipes, get smart
            substitutions, and make meal planning effortless with AI.
          </p>

          <div className="relative mt-8 sm:mt-12 flex justify-center">
            <div
              className="relative inline-block rounded-full bg-indigo-600 px-12 py-4 text-base md:text-lg font-semibold text-white transition-all 
                       hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400
                       before:absolute before:inset-0
                       before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                       before:-translate-x-full before:animate-shimmer overflow-hidden"
            >
              <RegisterLink>
                <span className="relative z-10">
                  Start Creating Free Recipes
                </span>
              </RegisterLink>
            </div>
          </div>

          <p className="mt-4 text-sm text-white/80">
            Limited time offer • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
