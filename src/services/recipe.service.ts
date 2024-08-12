// https://dummyjson.com/recipes

import { Recipe } from "../types/Recipe.type";

export { getRecipes, getRecipe };

async function getRecipes(): Promise<Recipe[]> {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();

  return data.recipes as Recipe[];
}

async function getRecipe(recipeId: number): Promise<Recipe> {
  const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  const data = await response.json();

  return data as Recipe;
}
