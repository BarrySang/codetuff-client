import React from 'react';
import '../css/authentication.css';

class Authentication extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-end auth-container">
                <a href="login">Login</a>
                <a href="#">Signup</a>
            </div>
        )
    }
}

export default Authentication;