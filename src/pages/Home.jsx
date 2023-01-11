import axios from "axios";
import React, { useEffect, useState } from "react";
import Recipes from "../components/Recipes";
import Title from "../components/Title";
import RecipeDetail from "./RecipeDetail";

const Home = () => {
  // Variable pour stocker la data de l'API
  const [data, setData] = useState([]);
  // Variables pour la recherche de recettes
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Récupere la data depuis l'API et la stocke dans la variable data
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => setData(res.data.meals));
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => setData(res.data.meals));
  };

  return (
    <div>
      <Title />
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <Recipes recipe={data} />
      <div style={{ display: "none" }}>
        <RecipeDetail />
      </div>
    </div>
  );
};

export default Home;
