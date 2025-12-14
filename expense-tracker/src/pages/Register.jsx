import React, { useState } from "react";
import img from "../assets/images/Accountant.gif";
import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!username || !password || !confirmPassword) {
            setError("All fields are required!");
            return;
        }

        if (password !== confirmPassword) {
            setError("Password and Confirm Password do not match!");
            return;
        }

        navigate("/Login");
    };

    const handleReset = () => {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setError("");
    };

    return (
        <div className="login-page">
            <div className="login-container">

                <div className="login-form">
                    <h1>Sign Up</h1>

                    {error && <p className="error-msg">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                        />

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="login-input"
                        />

                        <div className="button-group">
                            <button type="submit" className="btn-login">
                                Register
                            </button>

                            <button
                                type="button"
                                onClick={handleReset}
                                className="btn-reset"
                            >
                                Reset
                            </button>
                        </div>

                        <div className="linkform">
                            <p>
                                Already have an account?{" "}
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="login-image">
                    <img src={img} alt="Register Illustration" />
                </div>

            </div>
        </div>
    );
}

export default Register;
