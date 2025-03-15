import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.SignUp.css";

const Login = ({ onClose, onSwitchToSignUp }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Both fields are required.");
            return;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError("Please enter a valid email.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                setError(data.message || "Login failed.");
                return;
            }

            localStorage.setItem("user", JSON.stringify(data));
            navigate("/dashboard");
        } catch (err) {
            setError("Something went wrong. Try again.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="login-container">
                {/* Close Button */}
                <button className="close-modal" onClick={onClose}>
                    ×
                </button>

                {/* User Icon and Text */}
                <div className="user-login-container">
                    <div className="user-icon">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <span className="login-text">Sign In</span>
                </div>

                {/* Error Message */}
                {error && <p className="error-message">{error}</p>}

                {/* Login Form */}
                <form className="login-form" onSubmit={handleSubmit}>
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

                    {/* Forgot Password */}
                    <div className="forgot-password">
                        <Link to="/forgot-password" className="forgot-password-link">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <button type="submit" className="sign-in-button">
                        SIGN IN
                    </button>
                </form>

                {/* OR Divider */}
                <div className="or-divider">
                    <div className="line"></div>
                    <span>OR</span>
                    <div className="line"></div>
                </div>

                {/* Google Login Button */}
                <button className="google-button">
                    <i className="fa-brands fa-google google-icon"></i>
                    Sign In with Google
                </button>

                {/* Signup Option */}
                <div className="signup-option">
                    Don't have an account?{" "}
                    <button className="switch-to-signup" onClick={onSwitchToSignUp}>
                        Sign up here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;