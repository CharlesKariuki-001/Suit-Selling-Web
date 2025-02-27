import "../styles/Login.SignUp.css";  // Reuse the same CSS for simplicity
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="login-container">
            {/* Back Arrow */}
            <Link to="/" className="back-arrow"> ← </Link>

            {/* User Icon & Sign-Up Title */}
            <div className="user-login-container">
                <div className="user-icon">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <span className="login-text">Sign Up</span>
            </div>

            {/* Sign Up Form */}
            <form className="login-form">
                {/* Phone Number Field with Kenya Country Code */}
                <div className="input-container">
                    <input 
                        type="tel" 
                        name="phone" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                        placeholder="+254" 
                    />
                    <label className={phone ? "filled" : ""}>Phone Number</label>
                    <div className="underline"></div>
                </div>

                {/* Email Field */}
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

                {/* Create Password Field */}
                <div className="input-container">
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <label className={password ? "filled" : ""}>Create Password</label>
                    <div className="underline"></div>
                </div>

                {/* Confirm Password Field */}
                <div className="input-container">
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                    <label className={confirmPassword ? "filled" : ""}>Confirm Password</label>
                    <div className="underline"></div>
                </div>

                {/* Sign Up Button */}
                <button className="sign-in-button">SIGN UP</button>

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

export default SignUp;
