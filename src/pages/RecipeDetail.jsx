import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  // Notre state de recipe que l'on retrouve aussi dans <Card />
  const [recipe, setRecipe] = useState("");
  // Id de notre page
  const { recipeId } = useParams();

  const fetchRecipeById = async (recipeId) => {
    // Effectuez une requête HTTP pour récupérer les informations sur le produit à partir de l'identifiant de produit
    const response = await fetch(`/recipe/${recipeId}`);
    const recipe2 = await response;
    console.log(recipe2);
    return recipe2;
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipe3 = await fetchRecipeById(recipeId);
      console.log(recipe3)
      setRecipe(recipe3);
    };
    fetchRecipe();
  }, [recipeId]);

  return (
    <div>
      {console.log(recipe)}
      <h1>Test 1 2 1 2</h1>
    </div>
  );
};

export default RecipeDetail;
