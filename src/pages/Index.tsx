
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { Badge } from "@/components/ui/badge";
import { Search, ChefHat, Clock, Users, Sparkles } from "lucide-react";
import { recipes } from "@/data/recipes";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    { name: "Drinks", icon: "🥤", count: 8 },
    { name: "Main Dishes", icon: "🍽️", count: 15 },
    { name: "Desserts", icon: "🍰", count: 12 },
    { name: "Quick Bites", icon: "🥙", count: 10 },
  ];

  const featuredRecipes = recipes.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 recipe-gradient opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
              Discover Amazing
              <span className="text-gradient block">Vegetarian Recipes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From refreshing drinks to hearty main dishes, explore our curated collection of 
              delicious plant-based recipes that will inspire your culinary journey.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12 animate-scale-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for recipes..."
                className="pl-10 h-12 text-lg border-2 focus:border-recipe-orange-500"
              />
              <Button className="absolute right-1 top-1 h-10 recipe-gradient text-white">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-recipe-orange-500">45+</div>
              <div className="text-sm text-muted-foreground">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-recipe-green-500">4.9</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-recipe-orange-500">10k+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <ChefHat className="h-8 w-8 text-recipe-orange-500 opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <Sparkles className="h-6 w-6 text-recipe-green-500 opacity-20" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair">
            Explore by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to="/recipes"
                className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-recipe-orange-500 transition-colors">
                  {category.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {category.count} recipes
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-playfair">
              Featured Recipes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked recipes that our community loves. Each one tested and perfected 
              for the best flavors and easiest preparation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <RecipeCard {...recipe} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/recipes">
              <Button size="lg" className="recipe-gradient text-white hover:opacity-90">
                View All Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-8 w-8 text-recipe-orange-500" />
            <span className="text-2xl font-bold font-playfair text-gradient">
              VeggieBites
            </span>
          </div>
          <p className="text-muted-foreground">
            Your ultimate destination for delicious vegetarian recipes.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            © 2024 VeggieBites. Made with ❤️ for food lovers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
