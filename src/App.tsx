import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { ChefHat, BookOpen, Video, ExternalLink, User } from 'lucide-react';
import { PageType, Recipe, RecipeFilter, NavigationItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import RecipesPage from './pages/Recipes';
import MediaPage from './pages/Media';
import AboutPage from './pages/About';
import ResourcesPage from './pages/Resources';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [recipeFilter, setRecipeFilter] = useState<RecipeFilter>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navigation: NavigationItem[] = [
    { name: 'Home', id: 'home', icon: ChefHat },
    { name: 'Recipes', id: 'recipes', icon: BookOpen },
    { name: 'Media', id: 'media', icon: Video },
    { name: 'About', id: 'about', icon: User },
    { name: 'Resources', id: 'resources', icon: ExternalLink }
  ];
  useEffect(() => {
  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 500);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedRecipe={setSelectedRecipe}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />

      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {currentPage === 'home' && (
          <HomePage 
            setCurrentPage={setCurrentPage}
            setSelectedRecipe={setSelectedRecipe}
          />
        )}
        {currentPage === 'recipes' && (
          <RecipesPage 
            selectedRecipe={selectedRecipe}
            setSelectedRecipe={setSelectedRecipe}
            recipeFilter={recipeFilter}
            setRecipeFilter={setRecipeFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}
        
        {currentPage === 'media' && <MediaPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'resources' && <ResourcesPage />}
      </main>

      <Footer 
        setCurrentPage={setCurrentPage}
        setSelectedRecipe={setSelectedRecipe}
        navigation={navigation}
      />
      {showBackToTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all hover:scale-110 z-50"
    aria-label="Back to top"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
)}
    </div>
  );
};

export default App;