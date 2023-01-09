import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";

const RecipeDetail = () => {
  // Id de notre page
  const { recipeId } = useParams();
  // Variable pour stocker la data de l'API
  const [data, setData] = useState([]);

  // Récupere la data depuis l'API et la stocke dans la variable data
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
      .then((res) => setData(res.data.meals));
  }, []);

  return (
    <div>
      <Title />
      <SearchBar />
      {data.map((recipe, index) =>
        recipe.idMeal === recipeId ? (
          <CardDetail recipe={recipe} key={index} />
        ) : null
      )}
    </div>
  );
};

export default RecipeDetail;
