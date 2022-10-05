import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        // props.onLoggedIn(username);
    };

    const handleClickRegister = (e) => {
        e.preventDefault();
        // props.toRegisterView('');
    };

    return (
        <div>

            <h2>
                Login Page
            </h2>
            <p>
                Please enter your credentials below
            </p>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <br></br>
                <br></br>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br></br>
                <br></br>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            <p> Not Registerd? Click to sign up -- </p>     <button type="SignUp" onClick={handleClickRegister}>Sign Up</button>

        </div>
    );
}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
    toRegisterView: PropTypes.func.isRequired,
};

export default LoginView;