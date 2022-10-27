import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegisterView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(true, username);
    };

    return (

        <form>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>

            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>

            <label>
                email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>

            <button type="submit" onClick={handleSubmit}>Submit</button>

        </form>
    );
}

RegisterView.propTypes = {
    onRegister: PropTypes.func.isRequired,
};

export default RegisterView;