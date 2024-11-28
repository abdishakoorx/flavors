'use client'

import { useEffect, useState } from "react"
import { Check, ListChecks, Plus, ShoppingCart, Trash2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useHeader } from "@/app/context/header-context"

interface GroceryItem {
  id: number
  name: string
  category: string
  quantity: number
  unit: string
  checked: boolean
}

const categories = [
  "Protein",
  "Vegetables",
  "Fruits",
  "Grains",
  "Dairy",
  "Pantry",
  "Snacks",
  "Other",
]

export default function GroceryShopper() {
  const { setHeaderName } = useHeader();

  useEffect(() => {
    setHeaderName('Grocery Shopper');
  }, [setHeaderName]);
  const [groceryList, setGroceryList] = useState<GroceryItem[]>([
    {
      id: 1,
      name: "Chicken Breast",
      category: "Protein",
      quantity: 2,
      unit: "lbs",
      checked: false,
    },
    {
      id: 2,
      name: "Broccoli",
      category: "Vegetables",
      quantity: 1,
      unit: "bunch",
      checked: false,
    },
    {
      id: 3,
      name: "Brown Rice",
      category: "Grains",
      quantity: 1,
      unit: "kg",
      checked: false,
    },
  ])

  const [newItem, setNewItem] = useState({
    name: "",
    category: "Other",
    quantity: 1,
    unit: "",
  })

  const addGroceryItem = () => {
    if (newItem.name.trim()) {
      setGroceryList([
        ...groceryList,
        {
          id: Date.now(),
          ...newItem,
          checked: false,
        },
      ])
      setNewItem({ name: "", category: "Other", quantity: 1, unit: "" })
    }
  }

  const toggleItemCheck = (id: number) => {
    setGroceryList(
      groceryList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setGroceryList(groceryList.filter((item) => item.id !== id))
  }

  const clearCheckedItems = () => {
    setGroceryList(groceryList.filter((item) => !item.checked))
  }

  const markAllComplete = () => {
    setGroceryList(groceryList.map((item) => ({ ...item, checked: true })))
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            Organize your shopping list with ease
          </p>
        </div>

        {/* Add New Item */}
        <Card className="mb-8">
          <CardContent className="flex flex-wrap items-end gap-3 p-6">
            <div className="flex-1">
              <Input
                placeholder="Item name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
              />
            </div>
            <Select
              value={newItem.category}
              onValueChange={(value) =>
                setNewItem({ ...newItem, category: value })
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="Qty"
              className="w-24"
              value={newItem.quantity}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: Number(e.target.value) })
              }
            />
            <Input
              placeholder="Unit"
              className="w-24"
              value={newItem.unit}
              onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
            />
            <Button onClick={addGroceryItem} size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Grocery List */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="flex items-center">
              <ListChecks className="mr-2 h-5 w-5" />
              Shopping List
            </CardTitle>
            <Button
              variant="destructive"
              size="sm"
              onClick={clearCheckedItems}
              className="h-8"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Checked
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {categories.map((category) => {
              const categoryItems = groceryList.filter(
                (item) => item.category === category
              )

              if (categoryItems.length === 0) return null

              return (
                <div key={category} className="space-y-3">
                  <h3 className="font-semibold">{category}</h3>
                  <div className="space-y-2">
                    {categoryItems.map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between rounded-lg border p-3 transition-colors ${
                          item.checked
                            ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20"
                            : ""
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={item.checked}
                            onCheckedChange={() => toggleItemCheck(item.id)}
                          />
                          <span
                            className={`${
                              item.checked ? "text-muted-foreground line-through" : ""
                            }`}
                          >
                            {item.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {item.quantity} {item.unit}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Button
            size="lg"
            className="group relative overflow-hidden"
            variant="outline"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <ShoppingCart className="mr-2 h-5 w-5" />
            Start Shopping
          </Button>
          <Button
            size="lg"
            className="group relative overflow-hidden"
            variant="outline"
            onClick={markAllComplete}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <Check className="mr-2 h-5 w-5" />
            Mark All Complete
          </Button>
        </div>
      </div>
    </div>
  )
}

