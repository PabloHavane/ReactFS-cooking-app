import React, { useState } from "react";

const Card = ({ recipe }) => {
  const [isHide, setIsHide] = useState(true);

  return (
    <li className="card">
      <h3>{recipe.strMeal}</h3>
      <h4>{recipe.strArea}</h4>
      <img src={recipe.strMealThumb} alt={"Plat de " + recipe.strMeal} />
      <button onClick={() => setIsHide(!isHide)}>
        {isHide === false ? 'Voir moins' : 'Voir plus'}
      </button>
      {!isHide && (
        <div>
          <style>
          </style>
        </div>
      )}
    </li>
  );
};

export default Card;
