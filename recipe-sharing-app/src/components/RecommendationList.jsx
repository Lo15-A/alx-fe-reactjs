import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  return (
    <div className="recommendation-list">
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>Refresh Recommendations</button>

      {recommendations && recommendations.length > 0 ? (
        <div className="recommendation-cards">
          {recommendations.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationList;
