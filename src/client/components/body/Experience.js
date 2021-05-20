import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Experience = () => {
  const [experience, setExperience] = useState({
    positions: [
      {
        title: "Web Developer",
        company: "Cord Digital",
        location: "Scottsdale, AZ",
        responsibilites:
          "I was given the responsibility of developing user interfaces using JavaScript, HTML, CSS, and Liquid. I worked with two other professionals that being a lead developer and a lead designer. We would communicate daily and make sure we stayed on track regarding deadlines. I was able to build two different successful websites that led to positive feedback from the clients.",
        duration: "Mar 2020 - June 2020",
      },
      {
        title: "Technical Product Specialist",
        company: "Cognizant",
        location: "Mesa, AZ",
        responsibilites:
          "Working as a Technical Product Specialist for a large company such as Cognizant showed me how to communicate effectively with other professionals. It showed me how to communicate with developers, business analyst, and managers. I was held accountable for the health and maintenance of Mercury Insurances Policy Center application. This included responsibilities such as debugging, fixing, and writing code daily. Java and SQL were the main languages being used for such activities.",
        duration: "Nov 2018 - Dec 2019",
      },
    ],
  });
  return (
    <Container className="portfolioPadding">
      <Row>
        <Col md={2} lg={2} xl={2}>
          <p className="h5 text-primary">Experience</p>
        </Col>
        <Col>
          {experience.positions.map((ele, idx) => (
            <Row>
              <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                <span className="font-weight-bold" id={idx + " " + ele.title}>
                  {ele.title}
                </span>{" "}
                @{" "}
                <span
                  className="font-weight-light"
                  id={idx + " " + ele.company}
                >
                  {ele.company}
                </span>{" "}
                <p
                  style={{ fontSize: "15px", fontWeight: "300" }}
                  id={idx + " " + ele.responsibilites}
                  className="pt-3"
                >
                  {ele.responsibilites}
                </p>
              </Col>
              <Col>
                <p
                  style={{ fontSize: "15px", fontWeight: "300" }}
                  className="font-weight-light text-right"
                  id={idx + " " + ele.duration}
                >
                  {ele.duration}
                </p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Experience;
