"use client";
import React from "react";
import { Check, Clock, Sparkles } from "lucide-react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

function Pricing() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-12 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 lg:text-5xl text-center">
            Early Access Pricing
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed dark:text-gray-400 text-gray-700 tracking-wide max-w-3xl">
            Join now and lock in special founding member benefits
          </p>
          <div className="mt-3 inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700">
            <Clock className="mr-2 h-4 w-4" />
            Limited time free access
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm text-indigo-700 mb-4">
                <Sparkles className="mr-2 h-4 w-4" />
                Future Premium
              </div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                Pro
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 dark:text-gray-200 sm:text-4xl">
                  Free
                </strong>
                <span className="text-sm font-medium ml-1 text-gray-700 dark:text-gray-500">
                  during beta
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                (Will be $29/month after launch)
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Unlimited AI recipe generations
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Custom dietary preferences
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Ingredient substitutions
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Recipe scaling
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Nutritional analysis
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Priority support
                </span>
              </li>
            </ul>

            <div className="mt-8 block rounded-full border cursor-pointer border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
              <RegisterLink>Start Free Trial</RegisterLink>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700 mb-4">
                <Sparkles className="mr-2 h-4 w-4" />
                Future Basic
              </div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                Basic
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 dark:text-gray-200 sm:text-4xl">
                  Free
                </strong>
                <span className="text-sm font-medium ml-1 text-gray-700 dark:text-gray-500">
                  during beta
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                (Will be $15/month after launch)
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  15 AI recipe generations/month
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Basic dietary preferences
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Recipe scaling
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-5 w-5 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-400">
                  Email support
                </span>
              </li>
            </ul>

            <div className="mt-8 block rounded-full border cursor-pointer border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
              <RegisterLink>Start Free Trial</RegisterLink>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-gray-500">
          Early access members will receive a 20% lifetime discount when we
          launch paid plans. Lock in your benefits by joining now!
        </p>
      </div>
    </div>
  );
}

export default Pricing;
