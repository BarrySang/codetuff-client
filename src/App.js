import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;
