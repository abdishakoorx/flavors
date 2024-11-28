"use client";

import { useEffect, useState } from "react";
import { addDays, format, startOfWeek } from "date-fns";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  ShoppingCart,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useHeader } from "@/app/context/header-context";

interface Meal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
}

interface DayMeals {
  breakfast: Meal | null;
  lunch: Meal | null;
  dinner: Meal | null;
}

interface MealPlan {
  [key: string]: DayMeals;
}

export default function MealPlanner() {
  const { setHeaderName } = useHeader();

  useEffect(() => {
    setHeaderName("Meal Planner");
  }, [setHeaderName]);

  const [selectedWeek, setSelectedWeek] = useState(new Date());
  const [mealPlan] = useState<MealPlan>({
    Monday: { breakfast: null, lunch: null, dinner: null },
    Tuesday: { breakfast: null, lunch: null, dinner: null },
    Wednesday: { breakfast: null, lunch: null, dinner: null },
    Thursday: { breakfast: null, lunch: null, dinner: null },
    Friday: { breakfast: null, lunch: null, dinner: null },
    Saturday: { breakfast: null, lunch: null, dinner: null },
    Sunday: { breakfast: null, lunch: null, dinner: null },
  });

  const navigateWeek = (direction: "prev" | "next") => {
    setSelectedWeek((current) => {
      const days = direction === "prev" ? -7 : 7;
      return addDays(current, days);
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            Plan your weekly meals with ease
          </p>
        </div>

        {/* Week Navigation */}
        <Card className="mb-8 backdrop-blur-sm">
          <CardContent className="flex items-center justify-between p-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateWeek("prev")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 text-lg font-medium">
              <Calendar className="h-5 w-5" />
              <span>
                {format(startOfWeek(selectedWeek), "MMM d")} -{" "}
                {format(addDays(startOfWeek(selectedWeek), 6), "MMM d, yyyy")}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateWeek("next")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Nutrition Overview */}
        <Card className="mb-8 overflow-hidden backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Nutrition Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Calories</span>
                  <span className="text-sm text-muted-foreground">
                    1500/2000
                  </span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Protein</span>
                  <span className="text-sm text-muted-foreground">
                    112/150g
                  </span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Carbs</span>
                  <span className="text-sm text-muted-foreground">
                    187/250g
                  </span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meal Plan Grid */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Object.entries(mealPlan).map(([day, meals]) => (
            <Card key={day} className="backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["breakfast", "lunch", "dinner"].map((mealType) => (
                  <div key={mealType}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium capitalize">
                        {mealType}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-muted-foreground hover:text-primary"
                          >
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Meal
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add {mealType}</DialogTitle>
                            <DialogDescription>
                              Choose a meal for {day}&apos;s {mealType}
                            </DialogDescription>
                          </DialogHeader>
                          {/* Add meal selection content here */}
                        </DialogContent>
                      </Dialog>
                    </div>
                    {meals[mealType as keyof DayMeals] ? (
                      <Card className="overflow-hidden">
                        <CardContent className="p-3">
                          <span className="text-sm">
                            {meals[mealType as keyof DayMeals]?.name}
                          </span>
                        </CardContent>
                      </Card>
                    ) : (
                      <div className="rounded-lg border border-dashed p-3 text-center text-sm text-muted-foreground">
                        No meal selected
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Button
            size="lg"
            className="group relative overflow-hidden"
            variant="outline"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <Target className="mr-2 h-5 w-5" />
            Update Nutrition Goals
          </Button>
          <Button
            size="lg"
            className="group relative overflow-hidden"
            variant="outline"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <ShoppingCart className="mr-2 h-5 w-5" />
            Generate Grocery List
          </Button>
        </div>
      </div>
    </div>
  );
}
