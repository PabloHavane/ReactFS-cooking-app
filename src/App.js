import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route dynamique qui, en fonction de l'id d'une recette, renvoit une page <RecipeDetail /> avec  toutes les infos sur la recette */}
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
