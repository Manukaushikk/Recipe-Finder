
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  category: string;
  description: string;
}

export const RecipeCard = ({ id, title, image, cookTime, servings, difficulty, category, description }: RecipeCardProps) => {
  const [imageError, setImageError] = useState(false);

  const getShortName = (fullTitle: string) => {
    return fullTitle.split(' ').slice(0, 2).join(' ');
  };

  return (
    <Card className="recipe-card-hover overflow-hidden border-0 shadow-lg bg-card">
      <Link to={`/recipe/${id}`}>
        <div className="relative h-48 overflow-hidden">
          {!imageError ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-recipe-orange-100 to-recipe-green-100 flex items-center justify-center">
              <div className="text-center px-4">
                <h4 className="text-xl font-bold text-recipe-orange-600 mb-1">
                  {getShortName(title)}
                </h4>
                <p className="text-sm text-recipe-green-600 font-medium">
                  {category}
                </p>
              </div>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/90 text-foreground">
              {category}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 w-8 h-8 bg-background/90 hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </Link>

      <CardContent className="p-6">
        <Link to={`/recipe/${id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-recipe-orange-500 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{cookTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{servings}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {difficulty}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};