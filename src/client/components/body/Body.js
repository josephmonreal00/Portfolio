import React from "react";
import Greeting from "./Greeting";
import About from "./About";
import Skills from "./Skills";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Greeting />
        <About />
        <Skills />
      </div>
    );
  }
}
export default Body;
