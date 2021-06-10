import React from 'react';
import { getOneBlog } from '../api_calls/blogs';
import Layout from './Layout';

class ShowBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: null,
            bodyData: null
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        
        getOneBlog(params.id)
            .then(blog => {
                this.setState({blog});
                console.log(blog);
                this.checkBlogs();
            });
        
    }


    checkBlogs = () => {
        if(this.state.blogs === false) {
            this.setState({bodyData: <p>There are currently no blogs</p>});
        } else if(this.state.blogs === 'error') {
            this.setState({bodyData: <p>An error ocurred</p>})
        } else {
            this.setState({bodyData: 
                <div>
                    <h3>{this.state.blog.title}</h3>
                    <p>{this.state.blog.body}</p>
                </div>
            })
        }
    }
    
    render() {
        const Body = () => {
            return(
                <div>
                    {this.state.bodyData}
                </div>
            )
        }
        return(
            <Layout Body={Body}></Layout>
        )
    }
}

export default ShowBlog;