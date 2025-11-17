import React from 'react';
import ReactDOM from "react-dom/client";
import { BookOpen, Video, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { HomePageProps } from '../types';
import { sampleRecipes } from '../data/recipes';

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, setSelectedRecipe }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-12 md:py-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto relative z-10">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold">
              🏆 World Skills & Coupe du Monde Judge
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              The F&B <span className="text-orange-500">Apprentice</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Master competition-level techniques from a judge who has evaluated the world's best. <span className="font-semibold text-white">20+ years of proven expertise.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={() => setCurrentPage('recipes')}
                className="group bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Recipes
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => setCurrentPage('media')}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold border-2 border-white hover:bg-gray-100 transition-all shadow-md"
              >
                Watch Tutorials
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                World Skills Judge
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                Coupe du Monde Judge
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                20+ Years Experience
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="./images/coupe-judging.jpg"
                alt="Competition judging at Coupe du Monde"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">Judging at Coupe du Monde de la Boulangerie</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Bar */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-center text-gray-600 text-sm font-semibold mb-4">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-700">
          <span>• World Skills International</span>
          <span>• Coupe du Monde</span>
          <span>• Baking New Zealand President</span>
          <span>• Competenz Assessor</span>
          <span>• Industry Advisory Boards</span>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="group text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-orange-100 rounded-2xl group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
            <Award className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-2">Competition-Level Standards</h3>
          <p className="text-gray-600 leading-relaxed">
            Learn the exact techniques used by world championship winners
          </p>
        </div>
        <div className="group text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-orange-100 rounded-2xl group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
            <BookOpen className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-2">Battle-Tested Recipes</h3>
          <p className="text-gray-600 leading-relaxed">
            Professional formulas refined over 20 years of bakery operation
          </p>
        </div>
        <div className="group text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-orange-100 rounded-2xl group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
            <Video className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold mb-2">Industry Connections</h3>
          <p className="text-gray-600 leading-relaxed">
            Access to conversations with international F&B icons and experts
          </p>
        </div>
      </div>

      {/* Featured Recipes */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Recipes</h2>
            <p className="text-gray-600">Competition-tested formulas and techniques</p>
          </div>
          <button 
            onClick={() => setCurrentPage('recipes')}
            className="text-orange-600 hover:text-orange-700 font-semibold text-lg group hidden md:flex items-center gap-2"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleRecipes.slice(0, 6).map((recipe) => (
            <div 
              key={recipe.id} 
              className="recipe-card-hover bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => { 
                setSelectedRecipe(recipe); 
                setCurrentPage('recipes'); 
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-orange-600 font-bold uppercase tracking-wide">
                  {recipe.category}
                </span>
                <h3 className="font-bold text-lg mt-1 mb-2 text-gray-900">
                  {recipe.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{recipe.time}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setCurrentPage('recipes')}
          className="md:hidden mt-6 w-full text-orange-600 hover:text-orange-700 font-semibold text-lg flex items-center justify-center gap-2"
        >
          View All Recipes
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
            <div className="text-orange-100">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">2</div>
            <div className="text-orange-100">World Championships</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
            <div className="text-orange-100">Professional Recipes</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
            <div className="text-orange-100">Apprentices Trained</div>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Learn From a Judge?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you learn from someone who judges world championships, you are not just getting recipes—you are learning the <span className="font-semibold">standards that separate good from exceptional</span>.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With experience on industry boards, advisory panels, and as a mentor to dozens of successful F&B businesses, I bring both competition precision and real-world practicality to every lesson.
            </p>
            <button 
              onClick={() => setCurrentPage('about')}
              className="self-start bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative h-64 lg:h-auto">
            <img 
              src="/images/jury-panel.jpg"
              alt="Judging panel at international competition"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;