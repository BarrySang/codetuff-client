import React from 'react';
import '../../css/auth-files.css';

class Login extends React.Component {
    render() {
        return (
            <div className="main-container">
                <h3 className="text-center mt-4 mb-4">Login</h3>
                <form className="main-form" action="/login">
                    <label htmlFor="username" className="form-label">Username: </label>
                    <input type="text" name="username" className="form-control"/>
                    <label htmlFor="password" className="form-label">Password: </label>
                    <input type="password" name="password" className="form-control"/>
                    <input type="submit" name="submit" value="Login" className="mt-3 form-control btn btn-primary"/>
                </form>

                <p className="mt-3">Don't have an account? <a href="/auth/signup">Signup here</a></p>
            </div>
        )
    }
}

export default Login;