import React from 'react';
import {getAllBlogs} from '../api_calls/blogs';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            bodyData: ''
        }
    }

    componentDidMount() {
        getAllBlogs()
            .then(blogs => {
                this.setState({blogs});
                this.checkBlogs();
            });
    }

    
    checkBlogs = () => {
        if(this.state.blogs === false) {
            this.setState({bodyData: <p>There are currently no blogs</p>});
        } else if(this.state.blogs === 'error') {
            this.setState({bodyData: <p>An error ocurred</p>})
        } else {
            this.showBlogs();
        }
    }

    showBlogs = () => {
        //Template for rendering blogs
        const blogs = this.state.blogs.map((blog) => 
            <li key={blog.id}>
                <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.preamble}</p>
                </div>
            </li>
        );

        this.setState({bodyData: <div>
                <ul>
                    {blogs}
                </ul>
            </div>});
    }

    render() {
        

        return(
            <div>
                {this.state.bodyData}
            </div>
        )
    }
}

export default Body;