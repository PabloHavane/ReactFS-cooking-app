import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Recipes = () => {
  // Variable pour stocker la data de l'API
  const [data, setData] = useState([]);
  //Variable pour utiliser le hook useNavigate servant à générer des URLs uniques pour nos recettes
  const navigate = useNavigate();

  // Génère l'URL de la page Détail d'une recette gràce à l'évènement onClick
  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  // Récupere la data depuis l'API et la stocke dans la variable data
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
      .then((res) => setData(res.data.meals));
  });

  return (
    <div className="recipes">
      {/* Liste qui va maper les données pour les passer à Card qui va ensuite les afficher */}
      <ul>
        {data.map((recipe) => (
          <Card
            key={recipe.idMeal}
            recipe={recipe}
            onClick={() => handleRecipeClick(recipe.idMeal)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
