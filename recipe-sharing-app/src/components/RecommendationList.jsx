import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>Refresh Recommendations</button>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationList;
