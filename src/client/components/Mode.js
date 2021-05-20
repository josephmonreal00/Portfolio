import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
const Mode = () => {
  return (
    <Container fluid>
      <Row className="bg-primary d-flex justify-content-end p-5">
        <Col lg={1} className="bg-danger text-right">
          <WbSunnyIcon></WbSunnyIcon>
        </Col>
        <Col lg={1} className="bg-danger"></Col>
        <Col lg={1} className="bg-danger text-left">
          <Brightness2Icon></Brightness2Icon>
        </Col>
      </Row>
    </Container>
  );
};

export default Mode;
