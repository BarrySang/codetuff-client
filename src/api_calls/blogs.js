//Dependancies
import axios from 'axios';

//Api call to get all blogs
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
            return 'error';
        });

    return returnData;
}