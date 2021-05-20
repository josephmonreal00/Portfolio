import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Greeting = () => {
  const getInTouchStyle = {
    fontSize: "20px",
  };
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
            design-minded Frontend Developer focused on building enjoyable user
            interfaces & experiences <span>&#128187;</span>
          </p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-5">
          <p className="m-5" style={getInTouchStyle}>
            Get in touch <span className="pl-2">&#128073;&#127997;</span>
            <span className="h6 pl-3" style={getInTouchStyle}>
              <a href="mailto:joemonreal23@icloud.com">
                joemonreal23@icloud.com
              </a>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Greeting;
