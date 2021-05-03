// React, Axios, React-Route
import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Body from "./body/Body";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
