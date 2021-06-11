import React from 'react';
import Authentication from './Authentication';

class Header extends React.Component {
    render() {
        return (
            <div className="">
                <h1 className="text-center">CodeStuff</h1>
                <div>
                    <Authentication />
                </div>
                
            </div>
        )
    }
}

export default Header;