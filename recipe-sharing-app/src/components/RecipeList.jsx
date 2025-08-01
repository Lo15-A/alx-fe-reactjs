import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore'; //  

const RecipeList = () => {
  const { recipes, searchTerm } = useRecipeStore(); //  

  // Optional filtering by searchTerm (can improve this depending on requirements)
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
