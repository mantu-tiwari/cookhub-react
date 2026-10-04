import React, { useState } from "react";

import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  UtensilsCrossed,
  Bell,
  PlusCircle,
} from "lucide-react";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1); // Example cart items count

  return (
    <div>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* --- Brand Logo --- */}
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-200 group-hover:scale-105 transition-transform duration-200">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <span className="text-2xl font-black tracking-tight text-gray-900">
                  Cook<span className="text-orange-500">Hub</span>
                </span>
              </a>

              {/* --- Desktop Navigation Links --- */}
              <nav className="hidden md:flex items-center gap-6">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors"
                >
                  Explore
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Chefs
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Community
                </a>
              </nav>
            </div>

            {/* --- Search Bar --- */}
            <div className="hidden sm:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search recipes, chefs, ingredients..."
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* --- Right Action Buttons --- */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Add Recipe Button (CTA) */}
              <button className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-md shadow-orange-500/20 active:scale-95 transition-all">
                <PlusCircle className="w-4 h-4" />
                <span>Add Recipe</span>
              </button>

              {/* Notifications */}
              <button className="relative p-2.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
              </button>

              {/* Cart Icon with Badge */}
              <button className="relative p-2.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Profile Avatar */}
              <div className="relative pl-2 border-l border-gray-200">
                <button className="flex items-center gap-2 p-0.5 rounded-full ring-2 ring-transparent hover:ring-orange-500/50 transition-all">
                  <img
                    src= "https://img.icons8.com/?size=100&id=IBgUXg3MQlTW&format=png&color=000000"
                    alt="User avatar"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Drawer Menu --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-4">
            {/* Mobile Search */}
            <div className="relative w-full sm:hidden pt-2">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <Search className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-2 pt-2">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-base font-semibold text-orange-500 bg-orange-50"
              >
                Explore
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
              >
                Categories
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
              >
                Chefs
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
              >
                Community
              </a>
            </nav>

            {/* Mobile Add Recipe CTA */}
            <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-semibold shadow-md shadow-orange-500/20 active:scale-95 transition-all">
              <PlusCircle className="w-4 h-4" />
              <span>Add Recipe</span>
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
