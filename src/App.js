import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />

        {/* A FAIRE : Créer une route dynamique qui, en fonction de l'id d'une recette, renvoit une page <Instructions /> avec  toutes les infos sur la recette */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
