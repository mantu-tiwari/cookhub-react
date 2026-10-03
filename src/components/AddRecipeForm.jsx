import React, { useState } from 'react';
import { 
  PlusCircle, 
  Upload, 
  DollarSign, 
  Clock, 
  User, 
  Utensils, 
  Image as ImageIcon, 
  Sparkles,
  X 
} from 'lucide-react';

export default function AddRecipeForm({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    title: '',
    chef: '',
    price: '',
    prepTime: '',
    image: '',
    description: '',
  });

  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'image') {
      setImagePreview(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddRecipe) {
      onAddRecipe(formData);
    }
    // Reset form after submission
    setFormData({
      title: '',
      chef: '',
      price: '',
      prepTime: '',
      image: '',
      description: '',
    });
    setImagePreview('');
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-orange-500/5 border border-gray-100">
      
      {/* --- Header Section --- */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">
          <PlusCircle className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Add New Recipe
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-500">
            Share your culinary creation with the CookHub community.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* --- Recipe Title --- */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Recipe Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Classic Sourdough Margherita"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
            />
            <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* --- Chef Name --- */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Chef Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="chef"
              required
              value={formData.chef}
              onChange={handleChange}
              placeholder="e.g., Chef Mario"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
            />
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* --- Price & Prep Time Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Price */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Price ($)
            </label>
            <div className="relative">
              <input
                type="number"
                name="price"
                step="0.01"
                required
                value={formData.price}
                onChange={handleChange}
                placeholder="24.00"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
              />
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Prep Time */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Prep Time
            </label>
            <div className="relative">
              <input
                type="text"
                name="prepTime"
                required
                value={formData.prepTime}
                onChange={handleChange}
                placeholder="e.g., 30 mins"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
              />
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

        </div>

        {/* --- Image URL with Live Preview --- */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Image URL
          </label>
          <div className="relative">
            <input
              type="url"
              name="image"
              required
              value={formData.image}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
            />
            <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* Dynamic Image Preview Box */}
          {imagePreview && (
            <div className="mt-3 relative w-full h-36 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 group">
              <img
                src={imagePreview}
                alt="Recipe Preview"
                className="w-full h-full object-cover"
                onError={() => setImagePreview('')}
              />
              <button
                type="button"
                onClick={() => {
                  setImagePreview('');
                  setFormData((prev) => ({ ...prev, image: '' }));
                }}
                className="absolute top-2 right-2 bg-black/60 hover:bg-black text-white p-1.5 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                Image Preview
              </div>
            </div>
          )}
        </div>

        {/* --- Description --- */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly describe the ingredients, taste, and special preparation methods..."
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
          ></textarea>
        </div>

        {/* --- Submit Button --- */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
        >
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Publish Recipe</span>
        </button>

      </form>
    </div>
  );
}
