//Dependancies
import axios from 'axios';

//Api call to get all blogs
export function getAllBlogs() {
    let returnData = axios.get('blogs')
        .then(blogs => {
            if(blogs.data.found === false) {
                console.log(blogs.data.found);
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

//Api call to get one blog
export function getOneBlog(id) {
    let returnData = axios.get(`/blogs/${id}`)
        .then(blog => {
            if(blog.data.found === false) {
                return false;
            }
            return blog.data;
        })
        .catch(err => {
            console.log(err);
            return 'error';
        });

    return returnData;
}