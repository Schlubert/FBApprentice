import React from 'react';
import ReactDOM from "react-dom/client";
import { ChefHat, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { FooterProps } from '../types';

const Footer: React.FC<FooterProps> = ({ setCurrentPage, setSelectedRecipe, navigation }) => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold">The F&B Apprentice</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of food and beverage professionals with 
              world-class knowledge and expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.id);
                      setSelectedRecipe(null);
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* The Gilberts Group */}
          <div>
            <h3 className="font-bold text-lg mb-4">The Gilberts Group</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">Appetite Journeys</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">Elevate Hospitality</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">The Gilberts Group</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 The F&B Apprentice. Part of The Gilberts Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;