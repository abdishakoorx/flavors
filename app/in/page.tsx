import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-6">Tutorilas</h1>
      <div className="flex flex-col gap-10">
        <div className="border rounded-md p-4">
          <h2 className="text-lg font-normal text-gray-700 dark:text-gray-300">
            Meal Planner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-2">
              <p>Steps</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li>Step 4</li>
                <li>Step 5</li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <p>Visuals</p>
              <Image
                src="/balanced.jpg"
                alt="image"
                width={200}
                height={200}
                className="w-full object-cover h-[200px]"
              />
            </div>
          </div>
        </div>
        <div className="border rounded-md p-4">
          <h2 className="text-lg font-normal text-gray-700 dark:text-gray-300">
            Grocery Shopper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-2">
              <p>Steps</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li>Step 4</li>
                <li>Step 5</li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <p>Visuals</p>
              <Image
                src="/balanced.jpg"
                alt="image"
                width={200}
                height={200}
                className="w-full object-cover h-[200px]"
              />
            </div>
          </div>
        </div>
        <div className="border rounded-md p-4">
          <h2 className="text-lg font-normal text-gray-700 dark:text-gray-300">
            Recipe Builder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-2">
              <p>Steps</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li>Step 4</li>
                <li>Step 5</li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <p>Visuals</p>
              <Image
                src="/balanced.jpg"
                alt="image"
                width={200}
                height={200}
                className="w-full object-cover h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
