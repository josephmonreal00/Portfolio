import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Col, Row } from "react-bootstrap";
const Skills = () => {
  const [information, setInformation] = useState({
    languages: ["JavaScript (ES6)", "TypeScript", "HTML", "CSS/SASS", "SQL"],
    frameworks: ["React", "Angular", "Node", "Timber", "Shopify"],
    tools: ["Git & GitHub", "Chrome DevTools", "Postman", "MongoDB", "MySql"],
    design: ["Sketch", "Adobe"],
  });

  return (
    <Container className="portfolioPadding">
      <Row>
        <Col md={2} lg={2} xl={2}>
          <p className="h5 text-primary">Skills</p>
        </Col>
        <Col>
          <p className="h5">Languages</p>
          {information.languages.map((ele, idx) => (
            <p
              style={{ fontSize: "15px" }}
              className="font-weight-light"
              id={ele + " " + idx}
            >
              {ele}
            </p>
          ))}
        </Col>
        <Col>
          <p className="h5">Frameworks</p>
          {information.frameworks.map((ele, idx) => (
            <p
              style={{ fontSize: "15px" }}
              className="font-weight-light"
              id={ele + " " + idx}
            >
              {ele}
            </p>
          ))}
        </Col>
        <Col>
          <p className="h5">Tools</p>
          {information.tools.map((ele, idx) => (
            <p
              style={{ fontSize: "15px" }}
              className="font-weight-light"
              id={ele + " " + idx}
            >
              {ele}
            </p>
          ))}
        </Col>
        <Col>
          <p className="h5">Design</p>
          {information.design.map((ele, idx) => (
            <p
              style={{ fontSize: "15px" }}
              className="font-weight-light"
              id={ele + " " + idx}
            >
              {ele}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Skills;
