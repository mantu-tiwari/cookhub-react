import React from "react";
import RecipeCard from "../components/RecipeCard";

const RecipePage = () => {
  const recipeItems = [
    {
      id: 1,
      title: "Classic Margherita",
      chef: "Chef Mario",
      price: "24",
      prepTime: "30 mins",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800",
      description: "Hand-stretched sourdough base topped with mozzarella, San Marzano tomatoes, and fresh basil."
    },
    {
      id: 2,
      title: "Salmon Zen Bowl",
      chef: "Chef Elena",
      price: "32",
      prepTime: "25 mins",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
      description: "Healthy salmon bowl with avocado, organic quinoa, edamame, and sesame drizzle."
    },
    {
      id: 3,
      title: "Prime Wagyu Steak",
      chef: "Chef Giovanni",
      price: "65",
      prepTime: "45 mins",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
      description: "Premium A5 Wagyu served with truffle mashed potatoes, roasted garlic, and herb butter."
    },
    {
      id: 1,
      title: "Classic Margherita",
      chef: "Chef Mario",
      price: "24",
      prepTime: "30 mins",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800",
      description: "Hand-stretched sourdough base topped with mozzarella, San Marzano tomatoes, and fresh basil."
    },
    {
      id: 2,
      title: "Salmon Zen Bowl",
      chef: "Chef Elena",
      price: "32",
      prepTime: "25 mins",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
      description: "Healthy salmon bowl with avocado, organic quinoa, edamame, and sesame drizzle."
    },
    {
      id: 3,
      title: "Prime Wagyu Steak",
      chef: "Chef Giovanni",
      price: "65",
      prepTime: "45 mins",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
      description: "Premium A5 Wagyu served with truffle mashed potatoes, roasted garlic, and herb butter."
    }
  ];

  return (
    <div className="flex flex-wrap">
      <section className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Discover Recipes
          </h2>
          <p className="text-sm font-medium text-gray-500">
            Top curated recipes for your next meal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipeItems.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onAddToCart={(item) => console.log('Added:', item?.title)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipePage;