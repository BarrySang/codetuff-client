import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = ({Body}) => {
    return (
        <div className="container">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Layout;