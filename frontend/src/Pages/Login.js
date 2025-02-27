import "../styles/Login.SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-container">
            {/* Back Arrow */}
            <Link to="/" className="back-arrow"> ← </Link>

            {/* User Icon & Sign-In Title */}
            <div className="user-login-container">
                <div className="user-icon">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <span className="login-text">Sign In</span>
            </div>

            {/* Login Form */}
            <form className="login-form">
                <div className="input-container">
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <label className={email ? "filled" : ""}>Email</label>
                    <div className="underline"></div>
                </div>

                <div className="input-container">
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <label className={password ? "filled" : ""}>Password</label>
                    <div className="underline"></div>
                </div>  

                {/* Forgot Password Link */}
                <div className="forgot-password">
                    <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
                </div>

                {/* Sign-in Button */}
                <button className="sign-in-button">SIGN IN</button>

                {/* OR Divider */}
                <div className="or-divider">
                    <div className="line"></div>
                    <span>or</span>
                    <div className="line"></div>
                </div>

                {/* Google Login Button */}
                <button className="google-button">
                    <i className="fab fa-google google-icon"></i>
                    Google
                </button>
            </form>
        </div>
    );
};

export default Login;
