import React from "react";
import Card from "./Card";

const Recipes = ({ recipe }) => {

  return (
    <div className="recipes">
      {/* Liste qui va maper les données pour les passer à Card qui va ensuite les afficher */}
      <ul>
        {recipe.map((recipe) => (
          <Card
            key={recipe.idMeal}
            recipe={recipe}
          />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
