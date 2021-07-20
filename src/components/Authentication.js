import React from 'react';
import '../css/authentication.css';

class Authentication extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-end auth-container">
                <a href="/auth/login">Login</a>
                <a href="/auth/signup">Signup</a>
            </div>
        )
    }
}

export default Authentication;