import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/AddMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";

function EditPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const recipe = location.state?.recipe;

    const [formData, setFormData] = useState({
        title: recipe?.title || "",
        category: recipe?.category || "Breakfast",
        image: recipe?.image || "",
        cookingTime: recipe?.cookingTime || "",
        ingredients: recipe?.ingredients || "",
        description: recipe?.description || ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/HomePage");
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="form-card">
                <h2 className="text-center mb-4">Edit Your Recipe</h2>

                <form onSubmit={handleSubmit}>
                    <div className="row g-4">

                        <div className="col-md-6">
                            <label className="form-label">Recipe Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({ ...formData, title: e.target.value })
                                }
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Category</label>
                            <select
                                className="form-select"
                                value={formData.category}
                                onChange={(e) =>
                                    setFormData({ ...formData, category: e.target.value })
                                }
                            >
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                <option>Snacks</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Ingredients</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={formData.ingredients}
                                onChange={(e) =>
                                    setFormData({ ...formData, ingredients: e.target.value })
                                }
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({ ...formData, description: e.target.value })
                                }
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.image}
                                onChange={(e) =>
                                    setFormData({ ...formData, image: e.target.value })
                                }
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Cooking Time (minutes)</label>
                            <input
                                type="number"
                                className="form-control"
                                value={formData.cookingTime}
                                onChange={(e) =>
                                    setFormData({ ...formData, cookingTime: e.target.value })
                                }
                            />
                        </div>

                    </div>

                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-custom">
                            Update Recipe
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default EditPage;