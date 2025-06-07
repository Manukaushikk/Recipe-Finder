
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Search } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <ChefHat className="h-8 w-8 text-recipe-orange-500" />
          <span className="text-2xl font-bold font-playfair text-gradient">
            VeggieBites
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-recipe-orange-500"
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="text-sm font-medium transition-colors hover:text-recipe-orange-500"
          >
            Recipes
          </Link>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};
