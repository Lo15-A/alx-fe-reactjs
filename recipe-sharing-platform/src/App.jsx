// src/App.jsx
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-sky-500 text-white p-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <HomePage />
        </section>

        {/* Form Section */}
        <section className="bg-gray-50 shadow-lg rounded-lg p-6 border border-gray-200">
          <AddRecipeForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sky-600 text-white text-center p-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Recipe Sharing Platform</p>
      </footer>
    </div>
  );
}

export default App;
