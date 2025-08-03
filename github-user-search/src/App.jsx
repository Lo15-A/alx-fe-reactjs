import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
};

export default App;
