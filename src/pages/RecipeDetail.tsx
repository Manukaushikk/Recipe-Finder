
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Users, ChefHat, Heart, Share2, Printer } from "lucide-react";
import { getRecipeById } from "@/data/recipes";
import { useToast } from "@/hooks/use-toast";

const RecipeDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const recipe = getRecipeById(id || "");

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The recipe you're looking for doesn't exist.
          </p>
          <Link to="/recipes">
            <Button>Browse All Recipes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    toast({
      title: "Recipe Saved!",
      description: "Added to your favorites.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Recipe link copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/recipes">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Recipes
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Basic Info */}
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-background/90 text-foreground">
                  {recipe.category}
                </Badge>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 font-playfair">
                {recipe.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {recipe.description}
              </p>

              {/* Recipe Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-recipe-orange-500" />
                  <span className="font-medium">{recipe.cookTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-recipe-green-500" />
                  <span className="font-medium">{recipe.servings} servings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat className="h-5 w-5 text-recipe-orange-500" />
                  <Badge variant="outline">{recipe.difficulty}</Badge>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <Button onClick={handleSave} variant="outline" size="lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Save Recipe
                </Button>
                <Button onClick={handleShare} variant="outline" size="lg">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="lg">
                  <Printer className="h-5 w-5 mr-2" />
                  Print
                </Button>
              </div>
            </div>

            {/* Ingredients */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-recipe-orange-500 rounded-full"></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-recipe-gradient text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Nutritional Info */}
            {recipe.nutritionalInfo && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-playfair">Nutrition Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Calories</span>
                    <span className="font-semibold">{recipe.nutritionalInfo.calories}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Protein</span>
                    <span className="font-semibold">{recipe.nutritionalInfo.protein}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Carbs</span>
                    <span className="font-semibold">{recipe.nutritionalInfo.carbs}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Fat</span>
                    <span className="font-semibold">{recipe.nutritionalInfo.fat}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            {recipe.tips && recipe.tips.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-playfair">Chef's Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-recipe-green-500 rounded-full mt-2"></div>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* CTA Card */}
            <Card className="recipe-gradient text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Love this recipe?</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Discover more amazing vegetarian recipes in our collection.
                </p>
                <Link to="/recipes">
                  <Button variant="secondary" className="w-full">
                    Explore More Recipes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
