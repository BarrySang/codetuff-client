//Check the value of blogs in the state
export function checkBlogs(blogs) {
    if(this.state.blogs === false) {
        this.setState({bodyData: <p>There are currently no blogs</p>});
    } else if(this.state.blogs === 'error') {
        this.setState({bodyData: <p>An error ocurred</p>})
    } else {
        this.showBlogs();
    }
}