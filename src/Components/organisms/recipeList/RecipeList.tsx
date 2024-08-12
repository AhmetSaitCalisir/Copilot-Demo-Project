import { IRecipe } from "../../../types/Recipe.type";
import RecipeCard from "../../molecules/recipeCard/RecipeCard";
import "./RecipeList.css";

const RecipeList = (Props: { recipies: IRecipe[] }) => {
  return (
    <div className="container recipePage-container">
      {Props.recipies.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
