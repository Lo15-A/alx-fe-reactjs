import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  // other state if needed
}));

export default useRecipeStore;
