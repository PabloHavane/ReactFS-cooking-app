import React, { useState } from "react";

const Card = ({ recipe }) => {
  const [isHide, setIsHide] = useState(true);

  return (
    <li className="card">
      <h3>{recipe.strMeal}</h3>
      <h4>{recipe.strArea}</h4>
      <img src={recipe.strMealThumb} alt={"Plat de " + recipe.strMeal} />
      <div className={isHide === false ? "show" : "hide"}>
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
      </div>
      <button onClick={() => setIsHide(!isHide)}>
        {isHide === false ? "Voir moins" : "Voir plus"}
      </button>
    </li>
  );
};

export default Card;
