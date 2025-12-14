import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/AddMenu.css";

function AddRecipe() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        category: "",
        ingredients: "",
        description: "",
        cookingTime: "",
        image: null
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setForm({ ...form, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!form.name || !form.category || !form.ingredients || !form.description || !form.cookingTime || !form.image) {
            setError("Please fill all fields and upload an image.");
            return;
        }

        setSuccess("Recipe added successfully!");
        setTimeout(() => navigate("/homepage"), 1000);
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="box">
                <div className="form-card">
                    <h2 className="text-center mb-4">Add Your Recipe</h2>

                    {error && <p className="text-danger text-center">{error}</p>}
                    {success && <p className="text-success text-center">{success}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <label className="form-label">Recipe Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Category</label>
                                <select
                                    name="category"
                                    className="form-select"
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option>Breakfast</option>
                                    <option>Lunch</option>
                                    <option>Dinner</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Ingredients</label>
                                <textarea
                                    name="ingredients"
                                    className="form-control"
                                    rows="3"
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Description</label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    rows="3"
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Upload Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Cooking Time (mins)</label>
                                <input
                                    type="number"
                                    name="cookingTime"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-custom">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddRecipe;
