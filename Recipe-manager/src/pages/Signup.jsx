import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/userauth.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSignUp = () => {
        setError("");
        setSuccess("");

        if (!username || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setSuccess("Registration successful!");
        setTimeout(() => navigate("/"), 1000);
    };

    return (
        <div className="container-fluid login-wrapper">
            <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                    <div className="login-backbtn">
                        <div className="login-popup">
                            <div className="login-box-1">
                                <div className="neon-corner-blue top-left"></div>
                                <div className="neon-corner-red bottom-right"></div>
                                <div className="login-box">

                                    <button
                                        className="close-btn back-btn"
                                        onClick={() => navigate("/")}
                                    >
                                        ⬅
                                    </button>

                                    <h2 className="neon-title">SIGN UP</h2>

                                    {error && <p className="text-danger">{error}</p>}
                                    {success && <p className="text-success">{success}</p>}

                                    <input
                                        type="text"
                                        className="neon-input"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />

                                    <input
                                        type="password"
                                        className="neon-input"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <input
                                        type="password"
                                        className="neon-input"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />

                                    <button className="sign-btn" onClick={handleSignUp}>
                                        Register
                                    </button>

                                    <div className="bottom-links">
                                        <Link to="/" className="signup-link">
                                            Already have an account? Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
