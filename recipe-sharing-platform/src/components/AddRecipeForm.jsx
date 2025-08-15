import { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "", // changed from instructions
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required";
    if (!formData.steps.trim())
      newErrors.steps = "Steps are required"; // changed from instructions
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Recipe submitted:", formData);
      setFormData({ title: "", ingredients: "", steps: "" }); // reset
      setErrors({});
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium">Ingredients</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium">Steps</label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
