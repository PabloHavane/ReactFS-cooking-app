import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Recipes = () => {
  // Variable pour stocker la data de l'API
  const [data, setData] = useState([]);

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
          />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
