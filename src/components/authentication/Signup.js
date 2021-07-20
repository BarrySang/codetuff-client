import React from 'react';
import { register } from '../../api_calls/auth';
import '../../css/auth-files.css';

class Signup extends React.Component {
    //function when form is submitted
    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.getFormValues(e.target);
        register(data.firstname, data.othername, data.email, data.username, data.password, data.passwordconfirm);
    }

    // get form values
    getFormValues = (form) => {
        const formData = {
            firstname: form[0].value,
            othername: form[1].value,
            email: form[2].value,
            username: form[3].value,
            password: form[4].value,
            passwordconfirm: form[5].value
        }

        return formData;
    }
    

    render() {
        return (
            <div className="main-container">
                <h3 className="text-center mt-4 mb-4">Signup</h3>
                <form onSubmit={this.handleSubmit} className="main-form">
                    <label htmlFor="firstname" className="form-label">First Name: </label>
                    <input type="text" name="firstname" id="firstname" className="form-control"/>

                    <label htmlFor="othername" className="form-label">Other Name: </label>
                    <input type="text" name="othername" id="othername" className="form-control"/>

                    <label htmlFor="email" className="form-label">Email: </label>
                    <input type="email" name="email" id="email" className="form-control"/>

                    <label htmlFor="username" className="form-label">Username: </label>
                    <input type="text" name="username" id="username" className="form-control"/>

                    <label htmlFor="password" className="form-label">Password: </label>
                    <input type="password" name="password" id="password" className="form-control"/>
                    
                    <label htmlFor="passwordconfirm" className="form-label">Confirm Password: </label>
                    <input type="password" name="passwordconfirm" id="passwordconfirm" className="form-control"/>

                    <input type="submit" name="submit" value="Signup" className="mt-3 form-control btn btn-primary"/>
                </form>

                <p className="mt-3">Already have an account? <a href="/auth/login">Login here</a></p>
            </div>
        )
    }
}

export default Signup;