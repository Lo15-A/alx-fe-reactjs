import React from 'react';
import { Link } from 'react-router-dom'; // 

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> {/* Clickable recipe title */} 
          </h3>
          <p>{recipe.description}</p> {/* Optional: Add more info if needed */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
