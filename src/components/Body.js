import React from 'react';
import {getAllBlogs} from '../api_calls/blogs';

class Body extends React.Component {
    componentDidMount() {
        getAllBlogs()
            .then(blogs => {
                console.log(blogs);
            });
    }

    render() {
        return(
            <div>
                <h1>Body</h1>
            </div>
        )
    }
}

export default Body;