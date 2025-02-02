import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login =  () => {
    return (
        <div className="login-container">
            <Link to="/" className="back-arrow"> ← </Link>
            <div className="User-login-container">
                <div className="user-icon">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <span className="login-text">Login</span>
            </div>
          
            </div> 
        
        
    );
};

export default Login;