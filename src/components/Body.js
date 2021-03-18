import React from 'react';
import {getAllBlogs} from '../api_calls/blogs';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        getAllBlogs()
            .then(blogs => {
                this.setState({blogs});
            });
    }

    render() {
        
        if(this.state.blogs === false) {
            return <p>There are currently no blogs</p>
        } else if(this.state.blogs === 'error') {
            return <p>An error ocurred</p>
        }

        //Template for rendering blogs
        const blogs = this.state.blogs.map((blog) => 
            <li key={blog.id}>
                <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                </div>
            </li>
        );

        return(
            <div>
                <ul>
                    {blogs}
                </ul>
            </div>
        )
    }
}

export default Body;