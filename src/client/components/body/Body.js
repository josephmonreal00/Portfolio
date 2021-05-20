import React from "react";
import Greeting from "./Greeting";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
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
        <Experience />
      </div>
    );
  }
}
export default Body;
