import './loginPage.css'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        username.length > 0 && loginUser(username, password);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className='login-title'>Login </div>
                <input type="text" id="username" placeholder=" Username... " />
                <input type="password" id="password" placeholder=" Password... " />
                <button id='login-btn' type="submit">Login</button>
            </form>
        </div>
    );
};

/*
<label htmlFor="username">Username</label>
<label htmlFor="password">Password</label>
*/