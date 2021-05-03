// React, Axios, React-Route
import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Footer from "./Footer";
class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Portfolio</h1>
        <button type="button" className="btn btn-primary">
          Hello
        </button>
        <button type="button" className="btn btn-danger">
          Hello
        </button>
        <Footer />
      </div>
    );
  }
}

export default App;
