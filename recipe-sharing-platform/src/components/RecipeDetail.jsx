import React from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Recipe not found</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 text-lg">{recipe.summary}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="text-gray-600">
              This is where full cooking instructions will go. You can later
              extend your JSON data to include an `instructions` field and
              display it here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
