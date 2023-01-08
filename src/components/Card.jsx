import React from 'react';

const Card = ({ recipe }) => {
  return (
    <li className="card">
      <h3>{recipe.strMeal}</h3>
      <h4>{recipe.strArea}</h4>
      <img src={recipe.strMealThumb} alt={"Plat de " + recipe.strMeal} />
    </li>
  );
};

export default Card;