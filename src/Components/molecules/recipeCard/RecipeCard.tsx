import { IRecipeCard } from "../../../types/Recipe.type";
import "./RecipeCard.css";

const RecipeCard = (props: IRecipeCard) => {
  return (
    <div className="card recipeCard-card">
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ul className="list-group">
          {props.instructions.map((instruction, index) => (
            <li key={index} className="list-group-item">
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
