// Dependancies
import axios from "axios";

// Register user
export function register(first_name, other_name, email,username, password, passwordconfirm) {
    const body = {
        first_name, other_name, email, username, password, passwordconfirm
    }
    console.log(body);

    let register = axios.post('/auth/signup', {
        first_name, other_name, email, username, password, passwordconfirm
        })
        .then(data => {
            //console.log(data.errors);
        })
        .catch(err => {
            console.log(err);
        })

    return register;
}