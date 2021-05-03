// React, Axios, React-Route
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Footer from './Footer';
class App extends React.Component {
  render() {
    const style = {
      color: 'blue'
    }
    return (
      <div>
        <Nav />
        <h1 style={style}>Portfolio</h1>
        <Footer />
      </div>
    )
  }
}

export default App;