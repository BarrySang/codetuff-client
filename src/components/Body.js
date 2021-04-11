import React from 'react';
import {getAllBlogs} from '../api_calls/blogs';
import BodyContent from './BodyContent';

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
                console.log(blogs);
                this.checkBlogs();
            });
    }

    //Check the value of blogs in the state
    checkBlogs = () => {
        if(this.state.blogs === false) {
            this.setState({bodyData: <p>There are currently no blogs</p>});
        } else if(this.state.blogs === 'error') {
            this.setState({bodyData: <p>An error ocurred</p>})
        } else {
            this.showBlogs();
        }
    }

    //Show the blogs to the user
    showBlogs = () => {        
        //Template for rendering blogs
        const blogs = this.state.blogs.map((blog) => 
            <li key={blog.id}>
                <div>
                    <h3 onClick={this.blogSelected}>{blog.title}</h3>
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

    blogSelected = () => {
        console.log('blog selected');
    }

    render() {

        return(
            <div>
                <BodyContent contents={this.state.bodyData}/>
            </div>
        )
    }
}

export default Body;