//Dependancies
import axios from 'axios';

export function getAllBlogs() {
    let returnData = axios.get('blogs')
        .then(blogs => {
            if(!blogs) {
                return false;
            }
            return blogs.data;
        })
        .catch(err => {
            console.log(err);
            return false;
        });

    return returnData;
}