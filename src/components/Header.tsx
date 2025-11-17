import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { Menu, X, ChefHat } from 'lucide-react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  setCurrentPage, 
  setSelectedRecipe, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  navigation 
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <ChefHat className="w-8 h-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">The F&B Apprentice</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSelectedRecipe(null);
                }}
                className={`flex items-center gap-2 font-semibold transition ${
                  currentPage === item.id 
                    ? 'text-orange-600' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                  setSelectedRecipe(null);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 font-semibold transition ${
                  currentPage === item.id 
                    ? 'text-orange-600 bg-orange-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;