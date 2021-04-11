import React from 'react';

class BodyContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {data: props.contents}
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
}

export default BodyContent;