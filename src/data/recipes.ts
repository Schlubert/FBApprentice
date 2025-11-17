import { Recipe } from '../types';

export const sampleRecipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Sourdough Bread",
    category: "Baking",
    difficulty: "Intermediate",
    time: "24 hours",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    ingredients: ["500g strong bread flour", "350ml water", "100g active starter", "10g salt"],
    instructions: [
      "Mix flour and water, autolyse for 1 hour",
      "Add starter and salt, mix thoroughly",
      "Bulk ferment for 4-6 hours with stretch and folds",
      "Shape and cold proof overnight",
      "Bake at 230°C for 45 minutes"
    ]
  },
  {
    id: 2,
    title: "Croissant Masterclass",
    category: "Pastry",
    difficulty: "Advanced",
    time: "2 days",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800",
    ingredients: ["500g flour", "300ml milk", "250g butter", "50g sugar", "10g salt", "20g yeast"],
    instructions: [
      "Prepare dough and refrigerate overnight",
      "Laminate with butter in 3 folds",
      "Rest between folds",
      "Roll and shape croissants",
      "Proof and bake at 200°C"
    ]
  },
  {
    id: 3,
    title: "Perfect Espresso Technique",
    category: "Beverage",
    difficulty: "Beginner",
    time: "5 minutes",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800",
    ingredients: ["18g coffee beans", "36ml water", "Clean equipment"],
    instructions: [
      "Grind coffee to fine consistency",
      "Distribute evenly in portafilter",
      "Tamp with 15kg pressure",
      "Extract for 25-30 seconds",
      "Serve immediately"
    ]
  }
];