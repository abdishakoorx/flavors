import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah Chen",
    username: "@sarahcooks",
    body: "Game-changer for meal prep! Generated a month of gluten-free recipes that my kids actually love. The substitution suggestions are incredibly helpful.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Marcus Rodriguez",
    username: "@chefmarcus",
    body: "As a professional chef, I'm impressed by how it adapts traditional recipes to dietary restrictions while maintaining authentic flavors. Perfect for menu planning.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Emma Thompson",
    username: "@emmabakes",
    body: "Love how it suggests ingredient substitutions based on what's in my pantry. Saved me so many last-minute grocery trips!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "David Park",
    username: "@davidcooks",
    body: "The nutritional breakdown of each recipe helps me stay on track with my fitness goals. It's like having a nutritionist and chef in one!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Priya Patel",
    username: "@priyaskitchen",
    body: "Finally found an AI that understands Indian spices! It creates fusion recipes that respect traditional flavors while adding modern twists.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Tom Wilson",
    username: "@newbiecook",
    body: "Perfect for beginners! The step-by-step instructions and cooking tips have helped me gain confidence in the kitchen.",
    img: "https://avatar.vercel.sh/bruce",
  },
  {
    name: "Lisa Morgan",
    username: "@veganlisa",
    body: "The vegan recipe adaptations are creative and delicious. It's helped me discover so many new plant-based ingredients!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Alex Martinez",
    username: "@busyparent",
    body: "The meal planning feature is a lifesaver! It generates family-friendly recipes that fit our busy schedule and dietary needs.",
    img: "https://avatar.vercel.sh/jill",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          alt={`${name}'s profile picture`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 lg:text-5xl">
          Loved by Home Chefs & Professionals
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Join thousands of satisfied cooks transforming their kitchen experience
        </p>
      </div>
      
      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}