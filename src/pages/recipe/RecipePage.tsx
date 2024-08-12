import { useEffect, useState } from "react";
import { IRecipe } from "../../types/Recipe.type";
import { getRecipes } from "../../services/recipe.service";
import RecipeList from "../../Components/organisms/recipeList/RecipeList";

const RecipePage = () => {
  const [recipies, setRecipies] = useState<IRecipe[]>([]);

  useEffect(() => {
    getRecipes().then((data) => {
      setRecipies(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Recipe Page</h1>
      <RecipeList recipies={recipies} />
    </div>
  );
};

export default RecipePage;
