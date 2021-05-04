import React from "react";
import Greeting from "./Greeting";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Greeting />;
  }
}
export default Body;
