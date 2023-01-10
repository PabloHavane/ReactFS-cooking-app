import React from "react";
import { NavLink } from "react-router-dom";

const CardDetail = ({ recipe }) => {
  const youtube = recipe.strYoutube;

  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <h4>{recipe.strArea}</h4>
      <img src={recipe.strMealThumb} alt={"Plat de " + recipe.strMeal} />
      <h3>Ingredients</h3>
      <ul>
        {[...Array(20).keys()].map((i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient && measure ? (
            <li key={i}>{measure + " of " + ingredient}</li>
          ) : null;
        })}
      </ul>
      <h3>Recipe</h3>
      <p>{recipe.strInstructions}</p>
      <h3>The recipe in video</h3>
      <iframe
        width="1400"
        height="545"
        src={youtube}
        title={recipe.strMeal + " cooking video"}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <NavLink to="/">
        <button>Retour à l'accueil</button>
      </NavLink>
    </div>
  );
};

export default CardDetail;
