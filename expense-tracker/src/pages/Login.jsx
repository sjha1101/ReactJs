import React, { useState } from "react";
import img from "../assets/images/Accountant.gif";
import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!username || !password) {
            setError("Please fill all fields!");
            return;
        }

        navigate("/");
    };

    const handleReset = () => {
        setUsername("");
        setPassword("");
        setError("");
    };

    return (
        <div className="login-page">
            <div className="login-container">

                <div className="login-form">
                    <h1>Login</h1>

                    {error && <p className="error-msg">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                        />

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />

                        <div className="button-group">
                            <button type="submit" className="btn-login">
                                Login
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
                                Don't have an account?{" "}
                                <Link to="/register">Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="login-image">
                    <img src={img} alt="Login Illustration" />
                </div>

            </div>
        </div>
    );
}

export default Login;
