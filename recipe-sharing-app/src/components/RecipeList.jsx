import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const { filteredRecipes, filterRecipes, searchTerm } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
    searchTerm: state.searchTerm,
  }));

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      <h1>Recipe List</h1>
      <SearchBar />
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
