import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OfferingSection() {
  return (
    <section className="mt-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 lg:text-5xl">
            Tailored AI Recipe Creation
          </h2>

          <p className="mx-auto mt-4 text-xl leading-relaxed dark:text-gray-400 text-gray-700 tracking-wide max-w-3xl">
            Discover personalized recipes for every dietary preference. Our AI
            chef creates delicious meals tailored to keto, vegan, and balanced
            diets, ensuring everyone finds their perfect culinary match.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li className="relative">
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Keto diet meal"
              width={600}
              height={600}
              className="aspect-square rounded-md w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <Button variant="secondary" className="text-white">
                Keto-Friendly Recipes
              </Button>
            </div>
          </li>

          <li className="relative">
            <Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Vegan meal"
              width={600}
              height={600}
              className="aspect-square rounded-md w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <Button variant="secondary" className="text-white">
                Discover Vegan Delights
              </Button>
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 relative">
            <Image
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Balanced diet meal"
              width={1200}
              height={1200}
              className="aspect-square rounded-md w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <Button variant="secondary" className="text-white">
                Find Balance Diets
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
