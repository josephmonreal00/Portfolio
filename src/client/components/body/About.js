import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <Container className="portfolioPadding">
      <Row>
        <Col md={2} lg={2} xl={2}>
          <p className="h5 text-primary">Background</p>
        </Col>
        <Col md={10} lg={10} xl={10}>
          <p>
            I'm currently looking for a Frontend Developer position. I graduated
            from the University of Arizona and also enrolled into Galvanize's
            Hack Reactor Program.
          </p>
          <p>
            As a software Engineer, I enjoy bridging the gap between engineering
            and design - combining my technical knowledge with my keen eye for
            design to create beautiful products. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences
          </p>
          <p>
            When I'm not in front of a computer screen, I'm probably designing
            shoes, working out, or eating pizza.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

{
  /* <div className="container-sm">
      <div className="row">
        <p className="h5 col-2 text-primary">Background</p>
        <div className="col">
          <p>
            I'm currently looking for a Frontend Developer position. I graduated
            from the University of Arizona and also enrolled into Galvanize's
            Hack Reactor Program.
          </p>
          <p>
            As a software Engineer, I enjoy bridging the gap between engineering
            and design - combining my technical knowledge with my keen eye for
            design to create beautiful products. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences
          </p>
          <p>
            When I'm not in front of a computer screen, I'm probably designing
            shoes, working out, or eating pizza.
          </p>
        </div>
      </div>
    </div> */
}
