import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },

  setRecipes: (recipes) => {
    set({
      recipes,
      filteredRecipes: recipes, // initialize filtered to full list
    });
  },

  addRecipe: (recipe) => {
    set((state) => {
      const newRecipes = [...state.recipes, recipe];
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

  updateRecipe: ({ id, title, description }) => {
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, title, description } : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const newList = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: newList,
        filteredRecipes: newList.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },
}));

export default useRecipeStore;
