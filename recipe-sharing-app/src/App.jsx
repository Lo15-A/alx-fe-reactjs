import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import FavouritesList from './components/FavouritesList';
import RecommendationList from './components/RecommendationList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Recipe App</h1>

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favourites" element={<FavouritesList />} />
          <Route path="/recommendations" element={<RecommendationList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
