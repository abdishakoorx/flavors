'use client'

import React from "react";
import { motion } from "framer-motion";
import { Utensils, ShoppingCart, ChefHat } from 'lucide-react';
import { useHeader } from "../context/header-context";

const tutorials = [
  {
    title: "Meal Planner",
    icon: <Utensils className="w-8 h-8 text-blue-500" />,
    emoji: "🍽️",
    color: "blue",
    steps: [
      { title: "Understand Your Dietary Needs", description: "Tell us about your dietary preferences, restrictions, and health goals. Our AI will customize your meal plan accordingly.", emoji: "🥗" },
      { title: "Select Your Preferred Meals", description: "Browse through AI-curated meal suggestions and mark your favorites. We'll consider your taste preferences for future recommendations.", emoji: "👍" },
      { title: "Customize Your Plan", description: "Adjust portion sizes, swap meals, or specify cooking time preferences. Your plan adapts to your lifestyle.", emoji: "⚙️" },
      { title: "Generate Your Plan", description: "Our AI creates a balanced weekly meal plan, complete with nutritional information and preparation tips.", emoji: "🧠" },
      { title: "Review and Adjust", description: "Fine-tune your plan and save it for future reference. Your feedback helps improve future recommendations.", emoji: "📝" },
    ],
  },
  {
    title: "Grocery Shopper",
    icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
    emoji: "🛒",
    color: "green",
    steps: [
      { title: "Create Shopping List", description: "Your meal plan automatically generates a smart shopping list with all required ingredients.", emoji: "📝" },
      { title: "Check Available Items", description: "Mark items you already have in your pantry. AI helps track your inventory over time.", emoji: "✅" },
      { title: "Add Missing Items", description: "Easily add extra items to your list. AI suggests complementary ingredients based on your meals.", emoji: "➕" },
      { title: "Optimize Shopping Route", description: "Get a sorted list by store sections for efficient shopping. Save time and avoid missing items.", emoji: "🗺️" },
      { title: "Track and Save", description: "Keep track of your purchases and save frequent items for quick access in future shopping trips.", emoji: "💾" },
    ],
  },
  {
    title: "Recipe Builder",
    icon: <ChefHat className="w-8 h-8 text-purple-500" />,
    emoji: "👨‍🍳",
    color: "purple",
    steps: [
      { title: "Choose Base Recipe", description: "Start with a traditional recipe or create from scratch. AI suggests popular base recipes for your style.", emoji: "🍳" },
      { title: "Add Ingredients", description: "Select from a smart ingredient list. AI suggests complementary ingredients and substitutions.", emoji: "🥕" },
      { title: "Customize Flavors", description: "Adjust seasonings and spices. Get AI recommendations for flavor combinations that work well together.", emoji: "🌶️" },
      { title: "Adjust Portions", description: "Scale your recipe up or down. AI automatically adjusts ingredients while maintaining proper ratios.", emoji: "⚖️" },
      { title: "Save and Share", description: "Save your custom recipe and share with the community. Get feedback and suggestions for improvements.", emoji: "🌟" },
    ],
  },
];

const Page = () => {
  const { setHeaderName } = useHeader();
  
  React.useEffect(() => {
    setHeaderName('Tutorials');
  }, [setHeaderName]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-16">
        {tutorials.map((tutorial, index) => (
          <motion.div
            key={tutorial.title}
            className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-6">
              {tutorial.icon}
              <h2 className={`text-2xl font-semibold ml-3 text-${tutorial.color}-600 dark:text-${tutorial.color}-400`}>
                {tutorial.title} {tutorial.emoji}
              </h2>
            </div>
            <div className="space-y-6">
              {tutorial.steps.map((step, stepIndex) => (
                <motion.div
                  key={step.title}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: stepIndex * 0.1 }}
                >
                  <h3 className={`font-bold text-lg text-${tutorial.color}-600 dark:text-${tutorial.color}-400 mb-2`}>
                    {stepIndex + 1}. {step.title} {step.emoji}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Page;
