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
    <Container fluid>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
          <p className="h5">Designed & Developed by Joseph Monreal 2021</p>
        </Col>
        <Col>
          {links.map((ele, idx) => (
            <>
              <a href={ele.href}>{ele.social}</a>{" "}
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
