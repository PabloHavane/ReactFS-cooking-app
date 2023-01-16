import React from "react";
import Card from "./Card";

const Recipes = ({ recipe }) => {

  return (
    <div className="recipes">
      {/* Liste qui va maper les données pour les passer à Card qui va ensuite les afficher */}
      <ul className="ul-grid">
        {recipe.map((recipe) => (
          <Card
            key={recipe.idMeal}
            recipe={recipe}
            className="ul-grid-item"
          />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
