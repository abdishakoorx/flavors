"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Users, Carrot, ChefHat, Clock } from "lucide-react";

const steps = [
  {
    title: "Choose Portion Size",
    description: "Select the number of servings you want to prepare.",
    icon: Users,
  },
  {
    title: "Select Ingredients",
    description: "Pick your preferred ingredients or dietary restrictions.",
    icon: Carrot,
  },
  {
    title: "Get Recipe",
    description: "Our AI generates a personalized recipe just for you.",
    icon: ChefHat,
  },
  {
    title: "Start Cooking",
    description: "Follow the step-by-step instructions and enjoy your meal!",
    icon: Clock,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 lg:text-5xl text-center mb-12">
          The Process Simplified
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-transparent border-none shadow-md dark:shadow-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center ">
          <Button className="mt-12 px-12 py-8 rounded-full bg-primary-dark dark:hover:bg-primary-light hover:bg-primary-dark text-gray-100 dark:text-gray-800 dark:bg-primary-light border-none md:text-lg text-base font-sans font-semibold shadow-none">
            <RegisterLink className="flex items-center">
              Start Creating Free Recipes
            </RegisterLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
