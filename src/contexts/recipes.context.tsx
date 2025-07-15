import React, { createContext, useState } from "react";
interface RecipesContextProps {
  children: React.ReactNode;
}
export const RecipesConrext = createContext('' as any);
export const RecipesContextProvider: React.FC<RecipesContextProps> = ({ children }) => {
  const [ recipes ] = useState([
    {
      "id": 1,
      "name": "Falafel‑Waffle French Toast",
      "img": "https://cookingandcussing.com/wp-content/uploads/2019/08/IMG_7669-min.jpg.webp",
      "description": "A fun twist on a classic! Flavours of falafel in a crispy waffle form—no deep‑frying. Served with cucumber‑tomato salad and cilantro yogurt sauce for a refreshing brunch.",
      "recipe": [
        "White Bread: Thick‑cut, sturdy, slightly stale slices absorb the custard better.",
        "Eggs: Bind and enrich the batter for a creamy texture.",
        "Milk: Whole milk creates ideal richness—cream or alternative milk works too.",
        "Vanilla and cinnamon: Add warmth and sweetness—nutmeg or sugar optional.",
        "Salt: A pinch enhances flavor and smooths the egg mix.",
        "Butter: For sautéing—mix with oil to prevent burning."
      ],
      "ingredients": [
        { "name": "White Bread", "quantity": "250g" },
        { "name": "Eggs", "quantity": "500g" },
        { "name": "Milk", "quantity": "250g" },
        { "name": "Vanilla and cinnamon", "quantity": "50g" },
        { "name": "Butter", "quantity": "1 tsp" },
        { "name": "Salt", "quantity": "1 tsp" }
      ],
      "category": "vegetarian",
    },
    {
      "id": 2,
      "name": "Avocado‑Egg Boat",
      "img": "https://img-global.cpcdn.com/recipes/917ed46a9e1bc356/300x426cq80/avocado-egg-boat-recipe-main-photo.webp",
      "description": "Baked avocado halves filled with egg, seasoned with herbs and cheese—simple, nutritious, and perfect for brunch.",
      "recipe": [
        "Avocado: Halved and pitted to hold the egg.",
        "Eggs: One cracked into each half.",
        "Cheese: Sherbet of your choice on top.",
        "Herbs: Parsley or chives for brightness.",
        "Salt & pepper: Basic seasoning.",
        "Olive oil: Light drizzle before baking."
      ],
      "ingredients": [
        { "name": "Avocado", "quantity": "2 medium" },
        { "name": "Eggs", "quantity": "2 large" },
        { "name": "Cheese", "quantity": "20g" },
        { "name": "Fresh herbs", "quantity": "10g" },
        { "name": "Olive oil", "quantity": "1 tsp" },
        { "name": "Salt & pepper", "quantity": "to taste" }
      ],
      "category": "low-carbs",
    },
    {
      "id": 3,
      "name": "Berry‑Ricotta Toast",
      "img": "https://cheneetoday.com/wp-content/uploads/2022/05/Blueberry-toast-featured.jpg",
      "description": "Toasted bread topped with creamy ricotta, fresh berries, honey, and a sprinkle of mint—bright and elegant.",
      "recipe": [
        "Bread: Lightly toasted for crunch.",
        "Ricotta: Spread thickly.",
        "Berries: Mixed seasonal fruits.",
        "Honey: Drizzled for sweetness.",
        "Mint: Finely chopped as garnish.",
        "Salt: Pinch to enhance flavors."
      ],
      "ingredients": [
        { "name": "Bread", "quantity": "4 slices" },
        { "name": "Ricotta cheese", "quantity": "150g" },
        { "name": "Mixed berries", "quantity": "100g" },
        { "name": "Honey", "quantity": "2 tbsp" },
        { "name": "Fresh mint", "quantity": "5g" },
        { "name": "Salt", "quantity": "pinch" }
      ],
      "category": "vegetarian",
    },
    {
      "id": 4,
      "name": "Sweet Potato Hash",
      "img": "https://img-global.cpcdn.com/recipes/a68712092d66c676/300x426cq80/sweet-potato-hash-recipe-main-photo.webp",
      "description": "Roasted sweet potato cubes with peppers, onions, and spices—topped with a fried egg for a hearty morning meal.",
      "recipe": [
        "Sweet potato: Diced and roasted until caramelized.",
        "Bell pepper & onion: Sauté together.",
        "Spices: Paprika, cumin, salt.",
        "Eggs: Fried and placed on top.",
        "Cilantro: Fresh garnish.",
        "Olive oil: For roasting and sautéing."
      ],
      "ingredients": [
        { "name": "Sweet potato", "quantity": "300g" },
        { "name": "Bell pepper", "quantity": "1 medium" },
        { "name": "Onion", "quantity": "1 medium" },
        { "name": "Spices", "quantity": "2 tsp" },
        { "name": "Eggs", "quantity": "2 large" },
        { "name": "Olive oil", "quantity": "2 tbsp" }
      ],
      "category": "vegetarian",
    },
    {
      "id": 5,
      "name": "Spinach‑Mushroom Omelette",
      "img": "https://img-global.cpcdn.com/recipes/645f789911954737/300x426cq80/spinach-mushroom-omelette-with-flavour-of-garlic-recipe-main-photo.webp",
      "description": "Fluffy omelette stuffed with sautéed spinach, mushrooms, and cheese—light yet satisfying.",
      "recipe": [
        "Eggs: Whisked until frothy.",
        "Mushrooms & spinach: Sautéed until tender.",
        "Cheese: Shredded and melted inside.",
        "Salt & pepper: Basic seasoning.",
        "Butter: For the pan."
      ],
      "ingredients": [
        { "name": "Eggs", "quantity": "3 large" },
        { "name": "Mushrooms", "quantity": "100g" },
        { "name": "Spinach", "quantity": "50g" },
        { "name": "Cheese", "quantity": "30g" },
        { "name": "Butter", "quantity": "1 tbsp" },
        { "name": "Salt & pepper", "quantity": "to taste" }
      ],
      "category": "high-protein",
    },
    {
      "id": 6,
      "name": "Chocolate‑Banana Pancakes",
      "img": "https://img-global.cpcdn.com/recipes/25a2954df5e08be9/300x426cq80/chocolate-banana-pancakes-recipe-main-photo.webp",
      "description": "Soft pancakes flavored with cocoa and banana—great for indulgent brunch with a dusting of powdered sugar.",
      "recipe": [
        "Flour, cocoa powder, sugar, salt: Dry mix.",
        "Egg, milk & melted butter: Wet mix combined.",
        "Banana: Mashed into batter.",
        "Baking powder: For fluffiness.",
        "Butter/oil: For frying.",
        "Powdered sugar: Optional garnish."
      ],
      "ingredients": [
        { "name": "Flour", "quantity": "200g" },
        { "name": "Cocoa powder", "quantity": "30g" },
        { "name": "Banana", "quantity": "1 large" },
        { "name": "Egg", "quantity": "1" },
        { "name": "Milk", "quantity": "200ml" },
        { "name": "Butter", "quantity": "2 tbsp" }
      ],
      "category": "dairy-free",
    },
    {
      "id": 7,
      "name": "Smoked Salmon Bagel",
      "img": "https://feelgoodfoodie.net/wp-content/uploads/2021/03/smoked-salmon-bagel-10.jpg",
      "description": "Toasted bagel layered with cream cheese, smoked salmon, capers, red onion, and dill—a classic elevated brunch favorite.",
      "recipe": [
        "Bagel: Toasted.",
        "Cream cheese: Spread thickly.",
        "Smoked salmon: Generous layer.",
        "Capers & red onion: For acidity and bite.",
        "Dill: Fresh garnish.",
        "Lemon: Squeeze on top."
      ],
      "ingredients": [
        { "name": "Bagel", "quantity": "1 piece" },
        { "name": "Cream cheese", "quantity": "50g" },
        { "name": "Smoked salmon", "quantity": "70g" },
        { "name": "Capers", "quantity": "10g" },
        { "name": "Red onion", "quantity": "30g" },
        { "name": "Fresh dill", "quantity": "5g" }
      ],
      "category": "high-protein",
    },
    {
      "id": 8,
      "name": "Cottage‑Cheese Pancakes",
      "img": "https://img-global.cpcdn.com/recipes/b1ec7cc3f210e826/300x426cq80/syrnyky-ukrainian-cottage-cheese-pancakes-recipe-main-photo.webp",
      "description": "High‑protein pancakes made with cottage cheese, eggs, and oats—light, healthy, and delicious.",
      "recipe": [
        "Cottage cheese, oats, eggs: Blend into batter.",
        "Honey & vanilla: Gently sweeten.",
        "Baking powder: Light fluff.",
        "Oil/butter: For frying.",
        "Fresh fruit or syrup: To serve."
      ],
      "ingredients": [
        { "name": "Cottage cheese", "quantity": "200g" },
        { "name": "Oats", "quantity": "100g" },
        { "name": "Eggs", "quantity": "2 large" },
        { "name": "Honey", "quantity": "2 tbsp" },
        { "name": "Vanilla extract", "quantity": "1 tsp" },
        { "name": "Baking powder", "quantity": "1 tsp" }
      ],
      "category": "high-protein",
    },
    {
      "id": 9,
      "name": "Shakshuka",
      "img": "https://img-global.cpcdn.com/recipes/ab4b7f7e90330fe9/300x426cq80/shakshuka-recipe-main-photo.webp",
      "description": "Poached eggs in a spicy tomato‑pepper sauce—savory, satisfying, and perfect for dipping crusty bread.",
      "recipe": [
        "Onion & peppers: Sauté until soft.",
        "Garlic & spices: Cumin, paprika, chili.",
        "Tomatoes: Crushed to make the sauce.",
        "Eggs: Crack into sauce, cover to poach.",
        "Cilantro: Fresh garnish.",
        "Olive oil: Base for sauté."
      ],
      "ingredients": [
        { "name": "Onion", "quantity": "1 medium" },
        { "name": "Bell pepper", "quantity": "1 large" },
        { "name": "Tomatoes", "quantity": "400g" },
        { "name": "Eggs", "quantity": "3 large" },
        { "name": "Spices", "quantity": "2 tsp" },
        { "name": "Olive oil", "quantity": "2 tbsp" }
      ],
      "category": "dairy-free",
    },
    {
      "id": 10,
      "name": "Greek Yogurt Parfait",
      "img": "https://img-global.cpcdn.com/recipes/661cd52ee0184586/300x426cq80/greek-yogurt-strawberry-parfait-recipe-main-photo.webp",
      "description": "Layers of Greek yogurt, granola, fresh fruit, and honey—crunchy, creamy, and easy to assemble.",
      "recipe": [
        "Greek yogurt: Base layer.",
        "Granola: Adds crunch.",
        "Fresh berries or fruit: Seasonal mix.",
        "Honey: Drizzled on top.",
        "Nuts/seeds: For extra texture.",
        "Mint: Optional garnish."
      ],
      "ingredients": [
        { "name": "Greek yogurt", "quantity": "200g" },
        { "name": "Granola", "quantity": "50g" },
        { "name": "Fresh fruit", "quantity": "100g" },
        { "name": "Honey", "quantity": "1 tbsp" },
        { "name": "Nuts/seeds", "quantity": "20g" },
        { "name": "Mint leaves", "quantity": "5g" }
      ],
      "category": "low-carbs",
    },
    {
      "id": 11,
      "name": "Huevos Rancheros",
      "img": "https://img-global.cpcdn.com/recipes/0149dcc027d89e67/300x426cq80/huevos-rancheros-recipe-main-photo.webp",
      "description": "Crispy tortillas topped with fried eggs, spicy tomato‑chili sauce, avocado, and cheese—a bold southwestern brunch classic.",
      "recipe": [
        "Tortillas: Lightly fried or toasted.",
        "Tomato‑chili sauce: Simmered with onion and garlic.",
        "Eggs: Fried sunny side up.",
        "Avocado & cheese: Sliced avocado and cheese.",
        "Cilantro: Garnish.",
        "Refried beans: Optional side layer."
      ],
      "ingredients": [
        { "name": "Tortillas", "quantity": "2 pieces" },
        { "name": "Tomatoes", "quantity": "200g" },
        { "name": "Chili pepper", "quantity": "1 small" },
        { "name": "Eggs", "quantity": "2 large" },
        { "name": "Avocado", "quantity": "1/2 medium" },
        { "name": "Cheese", "quantity": "30g" }
      ],
      "category": "dairy-free",
    },
    {
      "id": 12,
      "name": "Cinnamon‑Apple Oatmeal",
      "img": "https://healthyfitnessmeals.com/wp-content/uploads/2021/08/apple-cinnamon-oatmeal-11.jpg",
      "description": "Warm oatmeal cooked with cinnamon, apple pieces, and a touch of maple syrup—perfectly cozy and nutritious.",
      "recipe": [
        "Oats: Cooked in water or milk.",
        "Apple: Diced and stirred in.",
        "Cinnamon: Infuses warm flavor.",
        "Maple syrup: For sweetening.",
        "Nutmeg: Optional touch.",
        "Nuts: Sprinkle on top."
      ],
      "ingredients": [
        { "name": "Oats", "quantity": "100g" },
        { "name": "Apple", "quantity": "1 medium" },
        { "name": "Cinnamon", "quantity": "1 tsp" },
        { "name": "Milk or water", "quantity": "250ml" },
        { "name": "Maple syrup", "quantity": "2 tbsp" },
        { "name": "Nuts", "quantity": "10g" }
      ],
      "category": "low-carbs",
    }
  ]
  );
  const handleRecipesRequest = (recipesCount: number, category?: string) => {
    if ((recipesCount > recipes.length || recipesCount < 0) && !category) {
      return recipes;
    }
    if (category !== undefined && category !== '') {
      return recipes.filter((recipe: any) => recipe.category === category);
    }
    return recipes.slice(0, recipesCount);
  }
  return (
    <RecipesConrext.Provider value={handleRecipesRequest}>
      {children}
    </RecipesConrext.Provider>
  );

}