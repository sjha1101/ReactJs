import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/HomePage.css";

function HomePage() {
    const [recipes, setRecipes] = useState([
        {
            _id: "1",
            name: "Paneer Butter Masala",
            category: "Indian",
            cookingTime: 30,
            ingredients: "Paneer, Butter, Tomato, Cream, Spices",
            description: "A rich and creamy North Indian paneer dish.",
            image: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg"
        },
        {
            _id: "2",
            name: "Veg Pasta",
            category: "Italian",
            cookingTime: 25,
            ingredients: "Pasta, Vegetables, Sauce",
            description: "Healthy vegetable pasta with tangy sauce.",
            image: "https://www.cubesnjuliennes.com/wp-content/uploads/2023/11/Vegetable-Pasta-Recipe.jpg"
        }
    ]);

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this recipe?")) return;
        setRecipes(recipes.filter(recipe => recipe._id !== id));
    };

    return (
        <div className="home-wrapper">
            <div className="home-header">
                <h2>My Recipes</h2>
                <Link to="/AddRecipe" className="add-btn">➕ Add Recipe</Link>
            </div>

            <div className="card-container">
                {recipes.length === 0 ? (
                    <p className="no-recipes">No recipes added yet!</p>
                ) : (
                    recipes.map(recipe => (
                        <div key={recipe._id} className="recipe-card">
                            <div className="recipe-image">
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                />
                            </div>

                            <div className="recipe-info">
                                <h3>{recipe.name}</h3>
                                <p><strong>Category:</strong> {recipe.category}</p>
                                <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
                                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p><strong>Description:</strong> {recipe.description}</p>
                            </div>

                            <div className="recipe-actions">
                                <Link
                                    to={`/EditPage/${recipe._id}`}
                                    className="edit-btn"
                                    state={{ recipe }}
                                >
                                    ✏️ Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(recipe._id)}
                                    className="delete-btn"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default HomePage;
