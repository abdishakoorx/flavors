"use client";

import { useEffect, useState } from "react";
import { Calculator, Edit, Plus, Save, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHeader } from "@/app/context/header-context";

interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  instructions: string[];
  nutritionInfo: NutritionInfo;
}

const emptyRecipe: Omit<Recipe, "id"> = {
  name: "",
  ingredients: [{ name: "", quantity: 1, unit: "" }],
  instructions: [""],
  nutritionInfo: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  },
};

export default function RecipeBuilderPage() {
  const { setHeaderName } = useHeader();

  useEffect(() => {
    setHeaderName("Recipe Builder");
  }, [setHeaderName]);

  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      name: "Chicken Stir Fry",
      ingredients: [
        { name: "Chicken Breast", quantity: 2, unit: "pieces" },
        { name: "Bell Pepper", quantity: 1, unit: "piece" },
        { name: "Soy Sauce", quantity: 2, unit: "tbsp" },
      ],
      instructions: [
        "Cut chicken into cubes",
        "Chop bell peppers",
        "Stir fry chicken and vegetables",
        "Add soy sauce and cook until done",
      ],
      nutritionInfo: {
        calories: 350,
        protein: 35,
        carbs: 10,
        fats: 15,
      },
    },
  ]);

  const [currentRecipe, setCurrentRecipe] = useState<
    Omit<Recipe, "id"> & { id?: number }
  >(emptyRecipe);
  const [isEditing, setIsEditing] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const addIngredient = () => {
    setCurrentRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: "", quantity: 1, unit: "" }],
    }));
  };

  const addInstruction = () => {
    setCurrentRecipe((prev) => ({
      ...prev,
      instructions: [...prev.instructions, ""],
    }));
  };

  const updateRecipe = () => {
    if (currentRecipe.name.trim()) {
      if (isEditing && currentRecipe.id) {
        setRecipes((prev) =>
          prev.map((recipe) =>
            recipe.id === currentRecipe.id
              ? { ...currentRecipe, id: recipe.id }
              : recipe
          )
        );
      } else {
        setRecipes((prev) => [
          ...prev,
          { ...currentRecipe, id: Date.now() } as Recipe,
        ]);
      }
      setCurrentRecipe(emptyRecipe);
      setIsEditing(false);
      setIsSheetOpen(false);
    }
  };

  const editRecipe = (recipe: Recipe) => {
    setCurrentRecipe(recipe);
    setIsEditing(true);
    setIsSheetOpen(true);
  };

  const deleteRecipe = (id: number) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            Create and manage your favorite recipes
          </p>
        </div>

        {/* Add Recipe Button */}
        <div className="mb-8 text-center">
          <Button
            size="lg"
            onClick={() => {
              setCurrentRecipe(emptyRecipe);
              setIsEditing(false);
              setIsSheetOpen(true);
            }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <Plus className="mr-2 h-5 w-5" />
            Create New Recipe
          </Button>
        </div>

        {/* Recipe List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="group relative overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{recipe.name}</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => editRecipe(recipe)}
                      className="h-8 w-8"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteRecipe(recipe.id)}
                      className="h-8 w-8 text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{recipe.ingredients.length} ingredients</p>
                  <p>{recipe.instructions.length} steps</p>
                  <p>{recipe.nutritionInfo.calories} calories per serving</p>
                </div>
              </CardContent>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/50 to-background/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100" /> */}
            </Card>
          ))}
        </div>

        {/* Recipe Form Sheet */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent className="w-full sm:max-w-2xl">
            <SheetHeader>
              <SheetTitle>
                {isEditing ? "Edit Recipe" : "Create New Recipe"}
              </SheetTitle>
              <SheetDescription>
                Fill in the details of your recipe below
              </SheetDescription>
            </SheetHeader>

            <Tabs defaultValue="details" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="recipe-name">Recipe Name</Label>
                    <Input
                      id="recipe-name"
                      value={currentRecipe.name}
                      onChange={(e) =>
                        setCurrentRecipe((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Enter recipe name"
                    />
                  </div>

                  <div>
                    <Label className="flex items-center">
                      <Calculator className="mr-2 h-4 w-4" />
                      Nutrition Information
                    </Label>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      {Object.entries(currentRecipe.nutritionInfo).map(
                        ([key, value]) => (
                          <div key={key}>
                            <Label htmlFor={key} className="capitalize">
                              {key}
                            </Label>
                            <Input
                              id={key}
                              type="number"
                              value={value}
                              onChange={(e) =>
                                setCurrentRecipe((prev) => ({
                                  ...prev,
                                  nutritionInfo: {
                                    ...prev.nutritionInfo,
                                    [key]: Number(e.target.value),
                                  },
                                }))
                              }
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ingredients" className="space-y-4">
                {currentRecipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="Ingredient name"
                      value={ingredient.name}
                      onChange={(e) => {
                        const newIngredients = [...currentRecipe.ingredients];
                        newIngredients[index].name = e.target.value;
                        setCurrentRecipe((prev) => ({
                          ...prev,
                          ingredients: newIngredients,
                        }));
                      }}
                    />
                    <Input
                      type="number"
                      placeholder="Qty"
                      className="w-24"
                      value={ingredient.quantity}
                      onChange={(e) => {
                        const newIngredients = [...currentRecipe.ingredients];
                        newIngredients[index].quantity = Number(e.target.value);
                        setCurrentRecipe((prev) => ({
                          ...prev,
                          ingredients: newIngredients,
                        }));
                      }}
                    />
                    <Input
                      placeholder="Unit"
                      className="w-24"
                      value={ingredient.unit}
                      onChange={(e) => {
                        const newIngredients = [...currentRecipe.ingredients];
                        newIngredients[index].unit = e.target.value;
                        setCurrentRecipe((prev) => ({
                          ...prev,
                          ingredients: newIngredients,
                        }));
                      }}
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => {
                        const newIngredients = currentRecipe.ingredients.filter(
                          (_, i) => i !== index
                        );
                        setCurrentRecipe((prev) => ({
                          ...prev,
                          ingredients: newIngredients,
                        }));
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={addIngredient} variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Ingredient
                </Button>
              </TabsContent>

              <TabsContent value="instructions" className="space-y-4">
                {currentRecipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Step ${index + 1}`}
                      value={instruction}
                      onChange={(e) => {
                        const newInstructions = [...currentRecipe.instructions];
                        newInstructions[index] = e.target.value;
                        setCurrentRecipe((prev) => ({
                          ...prev,
                          instructions: newInstructions,
                        }));
                      }}
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => {
                        const newInstructions =
                          currentRecipe.instructions.filter(
                            (_, i) => i !== index
                          );
                        setCurrentRecipe((prev) => ({
                          ...prev,
                          instructions: newInstructions,
                        }));
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={addInstruction} variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Step
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <Button onClick={updateRecipe} className="w-full">
                <Save className="mr-2 h-4 w-4" />
                {isEditing ? "Update Recipe" : "Save Recipe"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
