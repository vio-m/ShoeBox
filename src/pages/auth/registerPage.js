import './registerPage.css'
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

export function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerUser(username, password, password2);
    };

  return (
    <div className="register-container">
        <form onSubmit={handleSubmit}>
            <div className='register-title'>Register</div>

                <input
                    type="text"
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />

                <input
                    type="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />

                <input
                    type="password"
                    id="confirm-password"
                    onChange={e => setPassword2(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
                <p>{password2 !== password ? "Passwords do not match" : ""}</p>

            <button id='register-btn'>Register</button>

        </form>
    </div>
  );
}

/*
<label htmlFor="username">Username</label>
<label htmlFor="password">Password</label>
<label htmlFor="confirm-password">Confirm Password</label>
*/
