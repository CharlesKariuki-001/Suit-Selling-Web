import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.SignUp.css";

const Signup = ({ onClose, onSwitchToLogin }) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!fullname || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError("Please enter a valid email.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, email, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                setError(data.message || "Signup failed.");
                return;
            }

            navigate("/login");
        } catch (err) {
            setError("Something went wrong. Try again.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="signup-container">
                {/* Close Button */}
                <button className="close-modal" onClick={onClose}>
                    ×
                </button>

                {/* User Icon and Text */}
                <div className="user-signup-container">
                    <div className="user-icon">
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </div>
                    <span className="signup-text">Sign Up</span>
                </div>

                {/* Error Message */}
                {error && <p className="error-message">{error}</p>}

                {/* Signup Form */}
                <form className="signup-form" onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <div className="input-container">
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                        <label className={fullname ? "filled" : ""}>Full Name</label>
                    </div>

                    {/* Email Field */}
                    <div className="input-container">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className={email ? "filled" : ""}>Email</label>
                    </div>

                    {/* Password Field */}
                    <div className="input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label className={password ? "filled" : ""}>Password</label>
                        <button
                            type="button"
                            className="show-password-button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="input-container">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <label className={confirmPassword ? "filled" : ""}>Confirm Password</label>
                    </div>

                    {/* Sign Up Button */}
                    <button type="submit" className="sign-up-button">
                        SIGN UP
                    </button>
                </form>

                {/* OR Divider */}
                <div className="or-divider">
                    <div className="line"></div>
                    <span>OR</span>
                    <div className="line"></div>
                </div>

                {/* Google Sign Up Button */}
                <button className="google-button" onClick={() => console.log("Signing up with Google")}>
                    <i className="fa-brands fa-google google-icon"></i>
                    Sign Up with Google
                </button>

                {/* Login Option */}
                <div className="login-option">
                    Already have an account?{" "}
                    <button className="switch-to-login" onClick={onSwitchToLogin}>
                        Login here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;