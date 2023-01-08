import React from "react";
import Recipes from "../components/Recipes";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";

const Home = () => {
  return (
    <div>
      <Title />
      <SearchBar />
      <Recipes />
    </div>
  );
};

export default Home;
