import React from 'react';
import ReactDOM from "react-dom/client";
import { Search, Clock } from 'lucide-react';
import { RecipesPageProps, RecipeFilter } from '../types';
import { sampleRecipes } from '../data/recipes';

const RecipesPage: React.FC<RecipesPageProps> = ({ 
  selectedRecipe, 
  setSelectedRecipe, 
  recipeFilter, 
  setRecipeFilter, 
  searchTerm, 
  setSearchTerm 
}) => {
  const filteredRecipes = sampleRecipes.filter((recipe) => {
    const matchesFilter = recipeFilter === 'all' || recipe.category.toLowerCase() === recipeFilter;
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Recipes</h1>
        <p className="text-gray-600 text-lg">Professional recipes from years of bakery operation</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'baking', 'pastry', 'beverage'] as RecipeFilter[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setRecipeFilter(filter)}
                className={`px-4 py-2 rounded-lg font-semibold capitalize transition ${
                  recipeFilter === filter 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recipe Grid or Detail */}
      {selectedRecipe ? (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
  <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6">
    <button 
      onClick={() => setSelectedRecipe(null)}
      className="text-white hover:text-orange-100 font-semibold flex items-center gap-2 transition-colors"
    >
      ← Back to Recipes
    </button>
  </div>
  <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-64 md:h-96 object-cover" />
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                {selectedRecipe.category}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {selectedRecipe.difficulty}
              </span>
              <span className="flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                <Clock className="w-4 h-4" />
                {selectedRecipe.time}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{selectedRecipe.title}</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span className="text-lg">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <ol className="space-y-3">
                  {selectedRecipe.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-lg pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-sm text-orange-600 font-semibold">{recipe.category}</span>
                <h3 className="font-bold text-lg mt-1">{recipe.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {recipe.time}
                  </span>
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesPage;