import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  //Variable pour utiliser le hook useNavigate servant à générer des URLs uniques pour nos recettes
  const navigate = useNavigate();

  // Génère l'URL de la page Détail d'une recette gràce à l'évènement onClick
  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <li className="card">
      <h3>{recipe.strMeal}</h3>
      <h4>{recipe.strArea}</h4>
      <img src={recipe.strMealThumb} alt={"Plat de " + recipe.strMeal} />
      <button onClick={() => handleRecipeClick(recipe.idMeal)}>
        Voir plus
      </button>
    </li>
  );
};

export default Card;
