import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggler";

export default function Home() {
  return (
   <div>
     <Button>Sssup</Button>
     <Button variant="secondary">Sssup</Button>
     <ModeToggle/>     
     <h2 className="text-primary dark:text-primary-dark text-7xl font-extrabold">Sssup</h2>
     <h2 className="text-secondary dark:text-secondary-dark text-7xl font-extrabold">Sssup</h2>
     <h2 className="text-gray-700 dark:text-gray-200 text-7xl font-extrabold">Sssup</h2>
   </div>

  );
}
