import React from 'react';

// Recipe types
export interface Recipe {
  id: number;
  title: string;
  category: string;
  difficulty: string;
  time: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

// Video types
export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
}

// Navigation types
export interface NavigationItem {
  name: string;
  id: PageType;
  icon: React.ComponentType<{ className?: string }>;
}

// Page and filter types
export type PageType = 'home' | 'recipes' | 'media' | 'about' | 'resources';
export type RecipeFilter = 'all' | 'baking' | 'pastry' | 'beverage';

// Component Props types
export interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedRecipe: (recipe: Recipe | null) => void;
}

export interface RecipesPageProps {
  selectedRecipe: Recipe | null;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  recipeFilter: RecipeFilter;
  setRecipeFilter: (filter: RecipeFilter) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navigation: NavigationItem[];
}

export interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  navigation: NavigationItem[];
}