import React, { useState } from "react";
import { Star, Clock, ShoppingBag, Heart, Check } from 'lucide-react';

const RecipeCard = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);


  const handleAddToCart = () => {
    setIsAdded(true);
    if (onAddToCart) onAddToCart(recipe);
    setTimeout(() => setIsAdded(false), 1500); // Reset state back after 1.5s
  };
  return (
    <div>
      <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between">
        {/* --- Image Section with Overlays --- */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Floating Price Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-black text-gray-900 shadow-sm border border-white/50">
            ${recipe.price}
          </div>

          {/* Favorite / Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-white transition-all shadow-sm"
            aria-label="Add to favorites"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isLiked ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </button>
        </div>

        {/* --- Content Section --- */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            {/* Title & Rating Row */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-black text-gray-900 tracking-tight leading-snug group-hover:text-orange-500 transition-colors line-clamp-1">
                {recipe.title}
              </h3>

              <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 shrink-0">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-amber-900">
                  {recipe.rating}
                </span>
              </div>
            </div>

            {/* Recipe Description */}
            <p className="text-xs text-gray-500 font-medium line-clamp-2 leading-relaxed mb-4">
              {recipe.description}
            </p>
          </div>

          {/* --- Footer: Chef Meta & CTA --- */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
            {/* Chef & Prep Time Info */}
            <div className="min-w-0">
              <p className="text-xs font-bold text-gray-900 truncate">
                {recipe.chef}
              </p>
              <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400 mt-0.5">
                <Clock className="w-3 h-3 text-orange-500" />
                <span>{recipe.prepTime}</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all duration-200 shrink-0 ${
                isAdded
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                  : "bg-orange-500 hover:bg-orange-600 active:scale-95 text-white shadow-md shadow-orange-500/20"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
