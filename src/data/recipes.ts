
export interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "Drinks" | "Main Dishes" | "Desserts" | "Quick Bites";
  description: string;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Refreshing Green Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000",
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Drinks",
    description: "A vibrant and nutritious smoothie bowl packed with spinach, banana, and tropical fruits.",
    ingredients: [
      "2 cups fresh spinach",
      "1 frozen banana",
      "1/2 cup frozen mango chunks",
      "1/2 cup coconut milk",
      "1 tbsp chia seeds",
      "1 tbsp honey or maple syrup",
      "Fresh berries for topping",
      "Granola for topping",
      "Coconut flakes for topping"
    ],
    instructions: [
      "Add spinach, banana, mango, and coconut milk to a blender.",
      "Blend until smooth and creamy, about 2-3 minutes.",
      "Add chia seeds and honey, blend for another 30 seconds.",
      "Pour into bowls and add your favorite toppings.",
      "Serve immediately and enjoy!"
    ],
    tips: [
      "Freeze your fruits overnight for a thicker consistency",
      "Add protein powder for an extra boost",
      "Use frozen spinach if fresh isn't available"
    ],
    nutritionalInfo: {
      calories: 245,
      protein: "8g",
      carbs: "42g",
      fat: "6g"
    }
  },
  {
    id: "2",
    title: "Mediterranean Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Medium",
    category: "Main Dishes",
    description: "A hearty and flavorful bowl with quinoa, roasted vegetables, and creamy tahini dressing.",
    ingredients: [
      "1 cup quinoa",
      "2 cups vegetable broth",
      "1 zucchini, diced",
      "1 red bell pepper, sliced",
      "1 cup cherry tomatoes",
      "1/2 red onion, sliced",
      "1/4 cup olive oil",
      "2 tbsp tahini",
      "2 tbsp lemon juice",
      "2 cloves garlic, minced",
      "1/4 cup fresh parsley",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Rinse quinoa and cook in vegetable broth according to package instructions.",
      "Toss vegetables with 2 tbsp olive oil, salt, and pepper.",
      "Roast vegetables for 20-25 minutes until tender.",
      "Whisk together tahini, lemon juice, remaining olive oil, and garlic.",
      "Serve quinoa topped with roasted vegetables and tahini dressing.",
      "Garnish with fresh parsley."
    ],
    tips: [
      "Toast quinoa before cooking for extra flavor",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add chickpeas for extra protein"
    ],
    nutritionalInfo: {
      calories: 380,
      protein: "12g",
      carbs: "48g",
      fat: "16g"
    }
  },
  {
    id: "3",
    title: "Chocolate Avocado Mousse",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000",
    cookTime: "15 mins",
    servings: 6,
    difficulty: "Easy",
    category: "Desserts",
    description: "Rich and creamy chocolate mousse made with ripe avocados - a healthy dessert that tastes indulgent.",
    ingredients: [
      "3 ripe avocados",
      "1/4 cup unsweetened cocoa powder",
      "1/4 cup maple syrup",
      "1/4 cup almond milk",
      "1 tsp vanilla extract",
      "Pinch of sea salt",
      "Fresh berries for topping",
      "Mint leaves for garnish"
    ],
    instructions: [
      "Cut avocados in half and remove pits.",
      "Scoop avocado flesh into a food processor.",
      "Add cocoa powder, maple syrup, almond milk, vanilla, and salt.",
      "Process until completely smooth and creamy, about 3-4 minutes.",
      "Taste and adjust sweetness if needed.",
      "Divide into serving glasses and chill for at least 30 minutes.",
      "Serve topped with fresh berries and mint."
    ],
    tips: [
      "Use very ripe avocados for the best texture",
      "Chill for longer for a firmer consistency",
      "Add a pinch of cayenne for a spicy kick"
    ],
    nutritionalInfo: {
      calories: 185,
      protein: "4g",
      carbs: "20g",
      fat: "12g"
    }
  },
  {
    id: "4",
    title: "Crispy Chickpea Tacos",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000",
    cookTime: "20 mins",
    servings: 4,
    difficulty: "Easy",
    category: "Quick Bites",
    description: "Spiced roasted chickpeas in warm tortillas with fresh avocado and zesty lime crema.",
    ingredients: [
      "2 cans chickpeas, drained and rinsed",
      "2 tbsp olive oil",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp chili powder",
      "8 small corn tortillas",
      "1 avocado, sliced",
      "1/4 cup red cabbage, shredded",
      "1/4 cup Greek yogurt",
      "2 tbsp lime juice",
      "Fresh cilantro",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Pat chickpeas dry and toss with olive oil and spices.",
      "Roast chickpeas for 15-20 minutes until crispy.",
      "Warm tortillas in a dry skillet.",
      "Mix Greek yogurt with lime juice for crema.",
      "Fill tortillas with chickpeas, avocado, and cabbage.",
      "Drizzle with lime crema and garnish with cilantro."
    ],
    tips: [
      "Make sure chickpeas are completely dry before roasting",
      "Warm tortillas for better flavor and flexibility",
      "Add pickled jalapeños for extra heat"
    ],
    nutritionalInfo: {
      calories: 295,
      protein: "12g",
      carbs: "42g",
      fat: "10g"
    }
  },
  {
    id: "5",
    title: "Golden Turmeric Latte",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000",
    cookTime: "5 mins",
    servings: 1,
    difficulty: "Easy",
    category: "Drinks",
    description: "A warming and anti-inflammatory drink with turmeric, ginger, and aromatic spices.",
    ingredients: [
      "1 cup almond milk",
      "1 tsp turmeric powder",
      "1/2 tsp cinnamon",
      "1/4 tsp ginger powder",
      "Pinch of black pepper",
      "1 tbsp maple syrup",
      "1/2 tsp vanilla extract",
      "Coconut whipped cream (optional)"
    ],
    instructions: [
      "Heat almond milk in a small saucepan over medium heat.",
      "Whisk in turmeric, cinnamon, ginger, and black pepper.",
      "Simmer for 2-3 minutes, whisking constantly.",
      "Remove from heat and stir in maple syrup and vanilla.",
      "Pour into a mug and top with coconut whipped cream if desired.",
      "Serve immediately while warm."
    ],
    tips: [
      "Black pepper helps with turmeric absorption",
      "Use a milk frother for extra foam",
      "Adjust sweetness to taste"
    ],
    nutritionalInfo: {
      calories: 120,
      protein: "3g",
      carbs: "18g",
      fat: "4g"
    }
  },
  {
    id: "6",
    title: "Stuffed Bell Peppers with Rice",
    image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?q=80&w=1000",
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    category: "Main Dishes",
    description: "Colorful bell peppers stuffed with seasoned rice, vegetables, and herbs.",
    ingredients: [
      "4 large bell peppers (mixed colors)",
      "1 cup brown rice",
      "2 cups vegetable broth",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 zucchini, diced",
      "1 cup corn kernels",
      "1/2 cup diced tomatoes",
      "1/4 cup fresh basil",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "1/2 cup mozzarella cheese (optional)"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cook rice in vegetable broth according to package instructions.",
      "Cut tops off peppers and remove seeds and membranes.",
      "Sauté onion and garlic in olive oil until soft.",
      "Add zucchini and corn, cook for 5 minutes.",
      "Mix cooked rice with sautéed vegetables, tomatoes, and basil.",
      "Stuff peppers with rice mixture and place in baking dish.",
      "Cover and bake for 30-35 minutes until peppers are tender.",
      "Top with cheese if using and bake 5 more minutes."
    ],
    tips: [
      "Choose peppers that can stand upright",
      "Add nuts or seeds for extra crunch",
      "Leftover stuffing makes a great side dish"
    ],
    nutritionalInfo: {
      calories: 320,
      protein: "10g",
      carbs: "58g",
      fat: "8g"
    }
  },
  {
    id: "7",
    title: "Vegan Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000",
    cookTime: "25 mins",
    servings: 24,
    difficulty: "Easy",
    category: "Desserts",
    description: "Soft and chewy vegan chocolate chip cookies that taste just like the classic version.",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup vegan butter, softened",
      "3/4 cup brown sugar",
      "1/2 cup granulated sugar",
      "2 flax eggs (2 tbsp ground flaxseed + 6 tbsp water)",
      "2 tsp vanilla extract",
      "2 cups vegan chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Prepare flax eggs and let sit for 5 minutes.",
      "Mix flour, baking soda, and salt in a bowl.",
      "Cream vegan butter with both sugars until fluffy.",
      "Beat in flax eggs and vanilla extract.",
      "Gradually mix in flour mixture until just combined.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto baking sheets.",
      "Bake for 9-11 minutes until edges are golden.",
      "Cool on baking sheet for 5 minutes before transferring."
    ],
    tips: [
      "Don't overbake for chewy cookies",
      "Use parchment paper for easy removal",
      "Chill dough for thicker cookies"
    ],
    nutritionalInfo: {
      calories: 185,
      protein: "3g",
      carbs: "28g",
      fat: "8g"
    }
  },
  {
    id: "8",
    title: "Caprese Sandwich",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?q=80&w=1000",
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Quick Bites",
    description: "Fresh mozzarella, tomatoes, and basil on crusty bread with balsamic glaze.",
    ingredients: [
      "4 slices sourdough bread",
      "8 oz fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "1/4 cup fresh basil leaves",
      "2 tbsp balsamic glaze",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "1 clove garlic, halved"
    ],
    instructions: [
      "Toast bread slices until golden brown.",
      "Rub one side of each toast with garlic clove.",
      "Brush with olive oil and season with salt and pepper.",
      "Layer mozzarella, tomato slices, and basil on 2 pieces.",
      "Drizzle with balsamic glaze.",
      "Top with remaining bread slices.",
      "Cut diagonally and serve immediately."
    ],
    tips: [
      "Use the ripest tomatoes for best flavor",
      "Make your own balsamic glaze by reducing balsamic vinegar",
      "Add a spread of pesto for extra flavor"
    ],
    nutritionalInfo: {
      calories: 420,
      protein: "22g",
      carbs: "35g",
      fat: "24g"
    }
  },
  {
    id: "9",
    title: "Mango Lassi",
    image: "https://images.unsplash.com/photo-1553787244-7f6ddc3d1f5d?q=80&w=1000",
    cookTime: "5 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Drinks",
    description: "A creamy and refreshing Indian drink made with ripe mangoes and yogurt.",
    ingredients: [
      "2 ripe mangoes, peeled and chopped",
      "1 cup plain Greek yogurt",
      "1/2 cup milk",
      "2 tbsp honey",
      "1/2 tsp cardamom powder",
      "1/4 cup ice cubes",
      "Mint leaves for garnish",
      "Crushed pistachios for topping"
    ],
    instructions: [
      "Add mangoes, yogurt, milk, and honey to a blender.",
      "Add cardamom powder and ice cubes.",
      "Blend until smooth and creamy, about 2 minutes.",
      "Taste and adjust sweetness if needed.",
      "Pour into glasses over ice.",
      "Garnish with mint leaves and crushed pistachios.",
      "Serve immediately."
    ],
    tips: [
      "Use frozen mango chunks for a thicker consistency",
      "Chill glasses beforehand for best experience",
      "Add a pinch of saffron for luxury version"
    ],
    nutritionalInfo: {
      calories: 220,
      protein: "12g",
      carbs: "42g",
      fat: "3g"
    }
  },
  {
    id: "10",
    title: "Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1000",
    cookTime: "35 mins",
    servings: 4,
    difficulty: "Hard",
    category: "Main Dishes",
    description: "Creamy and rich mushroom risotto with mixed mushrooms and fresh herbs.",
    ingredients: [
      "1 1/2 cups Arborio rice",
      "6 cups warm vegetable stock",
      "1 lb mixed mushrooms, sliced",
      "1 onion, finely chopped",
      "3 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tbsp butter",
      "2 tbsp olive oil",
      "1/2 cup Parmesan cheese",
      "2 tbsp fresh thyme",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat stock in a saucepan and keep warm.",
      "Sauté mushrooms in olive oil until golden, set aside.",
      "In same pan, melt 2 tbsp butter and sauté onion until soft.",
      "Add garlic and rice, stir for 2 minutes until rice is coated.",
      "Add wine and stir until absorbed.",
      "Add warm stock one ladle at a time, stirring constantly.",
      "Continue until rice is creamy and tender, about 20 minutes.",
      "Stir in mushrooms, remaining butter, Parmesan, and thyme.",
      "Season with salt and pepper, serve immediately."
    ],
    tips: [
      "Keep stock warm throughout cooking",
      "Stir constantly for creamiest texture",
      "Don't rush - proper risotto takes time"
    ],
    nutritionalInfo: {
      calories: 420,
      protein: "14g",
      carbs: "65g",
      fat: "12g"
    }
  },
  {
    id: "11",
    title: "Banana Nice Cream",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=1000",
    cookTime: "5 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Desserts",
    description: "Healthy one-ingredient ice cream made from frozen bananas - naturally sweet and creamy.",
    ingredients: [
      "4 ripe bananas, sliced and frozen",
      "2-3 tbsp almond milk (if needed)",
      "1 tsp vanilla extract (optional)",
      "2 tbsp peanut butter (optional)",
      "1 tbsp cocoa powder (optional)",
      "Fresh berries for topping",
      "Chopped nuts for topping"
    ],
    instructions: [
      "Remove frozen banana slices from freezer.",
      "Let them soften for 2-3 minutes at room temperature.",
      "Add bananas to a food processor.",
      "Process until smooth and creamy, scraping sides as needed.",
      "Add almond milk if mixture is too thick.",
      "Add vanilla, peanut butter, or cocoa for flavor variations.",
      "Serve immediately for soft-serve consistency.",
      "Or freeze for 30 minutes for firmer texture.",
      "Top with berries and nuts before serving."
    ],
    tips: [
      "Use very ripe bananas for best sweetness",
      "Freeze bananas in slices for easier processing",
      "Experiment with different flavor combinations"
    ],
    nutritionalInfo: {
      calories: 210,
      protein: "3g",
      carbs: "54g",
      fat: "1g"
    }
  },
  {
    id: "12",
    title: "Veggie Spring Rolls",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000",
    cookTime: "20 mins",
    servings: 6,
    difficulty: "Medium",
    category: "Quick Bites",
    description: "Fresh and healthy spring rolls packed with crisp vegetables and herbs.",
    ingredients: [
      "12 rice paper wrappers",
      "2 cups lettuce, shredded",
      "1 large carrot, julienned",
      "1 cucumber, julienned",
      "1 red bell pepper, sliced thin",
      "1 cup red cabbage, shredded",
      "1/2 cup fresh mint leaves",
      "1/2 cup fresh cilantro",
      "1 avocado, sliced",
      "For dipping sauce:",
      "3 tbsp soy sauce",
      "2 tbsp rice vinegar",
      "1 tbsp sesame oil",
      "1 tsp honey",
      "1 tsp chili flakes"
    ],
    instructions: [
      "Prepare all vegetables and arrange on a platter.",
      "Fill a large bowl with warm water.",
      "Dip one rice paper wrapper in water for 10-15 seconds until soft.",
      "Place on a clean, damp towel.",
      "Add lettuce, carrot, cucumber, bell pepper, and cabbage to center.",
      "Top with mint, cilantro, and avocado.",
      "Fold bottom edge over filling, fold in sides, then roll tightly.",
      "Repeat with remaining wrappers.",
      "Mix all dipping sauce ingredients in a bowl.",
      "Serve spring rolls with dipping sauce."
    ],
    tips: [
      "Don't oversoak rice papers - they'll tear",
      "Keep finished rolls covered with damp towel",
      "Eat within 2 hours for best texture"
    ],
    nutritionalInfo: {
      calories: 145,
      protein: "4g",
      carbs: "28g",
      fat: "3g"
    }
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipes.filter(recipe => recipe.category === category);
};
