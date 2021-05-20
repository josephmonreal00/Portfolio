import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Greeting = () => {
  return (
    <Container fluid className="m-5">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-5">
          <p className="display-4 m-5">
            Hello! <span>&#128075;&#127997;</span>
          </p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={8} xl={7} className="m-5">
          <p className="display-4 m-5">
            I'm <span className="font-weight-bold">Joseph Monreal</span>, a
            design-minded Frontend Developer focused on building great user
            interfaces & experiences <span>&#128187;</span>
          </p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-5">
          <p className="m-5">
            Get in touch <span>&#128073;&#127997;</span>{" "}
            <span className="h6">joemonreal23@icloud.com</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Greeting;
