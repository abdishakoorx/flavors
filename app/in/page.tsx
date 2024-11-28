"use client";

import React from "react";
import { Utensils, ShoppingCart, ChefHat } from "lucide-react";
import { useHeader } from "../context/header-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tutorials = [
  {
    title: "Meal Planner",
    icon: <Utensils className="w-8 h-8 text-blue-500" />,
    emoji: "🍽️",
    color: "blue",
    steps: [
      {
        title: "Set Preferences",
        description: "Tell us your dietary needs and goals",
        emoji: "🥗",
      },
      {
        title: "Choose Meals",
        description: "Select your favorite meal options",
        emoji: "👍",
      },
      {
        title: "Customize",
        description: "Adjust portions and cooking preferences",
        emoji: "⚙️",
      },
      {
        title: "Generate Plan",
        description: "Get your personalized weekly meal plan",
        emoji: "🧠",
      },
      {
        title: "Review",
        description: "Fine-tune and save your plan",
        emoji: "📝",
      },
    ],
  },
  {
    title: "Grocery Shopper",
    icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
    emoji: "🛒",
    color: "green",
    steps: [
      {
        title: "Create List",
        description: "Auto-generate your shopping list",
        emoji: "📝",
      },
      {
        title: "Check Pantry",
        description: "Mark items you already have",
        emoji: "✅",
      },
      {
        title: "Add Items",
        description: "Include additional items as needed",
        emoji: "➕",
      },
      {
        title: "Optimize Route",
        description: "Get an organized shopping route",
        emoji: "🗺️",
      },
      {
        title: "Save List",
        description: "Store list for future shopping",
        emoji: "💾",
      },
    ],
  },
  {
    title: "Recipe Builder",
    icon: <ChefHat className="w-8 h-8 text-purple-500" />,
    emoji: "👨‍🍳",
    color: "purple",
    steps: [
      {
        title: "Select Recipe",
        description: "Start with a base recipe or create new",
        emoji: "🍳",
      },
      {
        title: "Add Ingredients",
        description: "Pick your ingredients",
        emoji: "🥕",
      },
      {
        title: "Season",
        description: "Add spices and seasonings",
        emoji: "🌶️",
      },
      {
        title: "Adjust Size",
        description: "Scale recipe servings",
        emoji: "⚖️",
      },
      {
        title: "Save",
        description: "Store your custom recipe",
        emoji: "🌟",
      },
    ],
  },
];

const Page = () => {
  const { setHeaderName } = useHeader();

  React.useEffect(() => {
    setHeaderName("Tutorials");
  }, [setHeaderName]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.title} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {tutorial.icon}
                <CardTitle
                  className={`text-${tutorial.color}-600 dark:text-${tutorial.color}-400`}
                >
                  {tutorial.title} {tutorial.emoji}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {tutorial.steps.map((step, stepIndex) => (
                <div key={step.title} className="space-y-2">
                  <h3
                    className={`font-bold text-gray-700 dark:text-gray-300`}
                  >
                    {stepIndex + 1}. {step.title} {step.emoji}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
