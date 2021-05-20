import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
const Footer = () => {
  const [links, setLinks] = useState([
    {
      social: "LinkedIn",
      href: "https://www.linkedin.com/in/josephandrewmonreal/",
    },
    { social: "GitHub", href: "https://github.com/josephmonreal00" },
    { social: "Email", href: "" },
  ]);
  return (
    <Container fluid className="p-5 m-5">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <p style={{ fontSize: "10px" }} className="pt-2">
            Designed & Developed by Joseph Monreal 2021
          </p>
        </Col>
        <Col md={6} lg={6} xl={6}>
          <Row>
            {links.map((ele, idx) => (
              <Col className="p-0 m-0">
                <a style={{ fontSize: "10px" }} href={ele.href}>
                  {ele.social}
                </a>{" "}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
