import React from 'react';

const CardDetail = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <h4>{recipe.strArea}</h4>
      <img src={recipe.strMealThumb} alt={"Plat de " + recipe.strMeal} />
      
    </div>
  );
};

export default CardDetail;