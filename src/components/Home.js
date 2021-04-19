import React from 'react';
import {getAllBlogs} from '../api_calls/blogs';
import Layout from './Layout';

class Home extends React.Component {
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
    checkBlogs = (blogs) => {
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
                <a href={"/blogs/" +blog.id}>
                    <div>
                        <h3>{blog.title}</h3>
                        <p>{blog.preamble}</p>
                    </div>                    
                </a>
            </li>
        );

        this.setState({bodyData: blogs});
    }

    render() {
        const Body = () => {
            return(
                <div>
                    <ul>
                        {this.state.bodyData}
                    </ul>
                </div>
            )
        }
        
        return(
            <div>
            <Layout Body={Body}></Layout>
            </div>
        )
    }
}

export default Home;