import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const Projects = () => {
  const [projects, setProjects] = useState({
    work: [
      {
        name: "Angular Task Manager",
        description: "Simple Task Manager application written in Angular.",
        languages: ["Angular", "CSS", "TypeScript"],
        year: 2021,
        website:
          "https://github.com/josephmonreal00/Angular---Task-Manager/tree/main/src/app",
        github:
          "https://github.com/josephmonreal00/Angular---Task-Manager/tree/main/src/app",
      },
      {
        name: "Aprisa Skincare",
        description: "Website I developed at my time with Cord Digital.",
        languages: ["HTML", "CSS", "JavaScript", "jQuery", "Liquid", "Shopify"],
        website: "https://aprisaskincare.com/",
        year: 2020,
        github: "NA",
      },
      {
        name: "Hanging Doorstop",
        description: "Website I developed at my time with Cord Digital.",
        languages: ["HTML", "CSS", "JavaScript", "jQuery", "Liquid", "Shopify"],
        website: "https://hangingdoorstop.com/",
        year: 2020,
        github: "NA",
      },
      {
        name: "Static Node.js and Express Site",
        description: "Treehouse Techdegree Project 6",
        languages: [
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
          "AJAX",
          "JSON",
          "Express",
          "Node.js",
        ],
        website:
          "https://github.com/josephmonreal00/techdegree-project-6https://github.com/josephmonreal00/techdegree-project-6",
        year: 2019,
        github:
          "https://github.com/josephmonreal00/techdegree-project-6https://github.com/josephmonreal00/techdegree-project-6",
      },
      {
        name: "Public API Requests",
        description: "Treehouse Techdegree Project 5",
        languages: ["HTML", "CSS", "JavaScript", "jQuery", "AJAX", "JSON"],
        year: 2019,
        website: "https://josephmonreal00.github.io/techdegree-project-5/",
        github: "https://github.com/josephmonreal00/techdegree-project-5",
      },
      {
        name: "OOP Game Show App",
        description: "Treehouse Techdegree Project 4",
        languages: ["HTML", "CSS", "JavaScript", "jQuery"],
        year: 2019,
        website: "https://josephmonreal00.github.io/techdegree-project-4/",
        github: "https://github.com/josephmonreal00/techdegree-project-4",
      },
      {
        name: "Interactive Form",
        description: "Treehouse Techdegree Project 3",
        languages: ["HTML", "CSS", "JavaScript", "jQuery"],
        year: 2019,
        website: "https://josephmonreal00.github.io/techdegree-project-3/",
        github: "https://github.com/josephmonreal00/techdegree-project-3",
      },
      {
        name: "List Pagination & Filtering",
        description: "Treehouse Techdegree Project 2",
        languages: ["HTML", "CSS", "JavaScript"],
        year: 2019,
        website: "https://josephmonreal00.github.io/techdegree-project-2/",
        github: "https://github.com/josephmonreal00/techdegree-project-2",
      },
      {
        name: "Quiz App",
        description: "Simple Quiz application.",
        languages: ["PHP", "HTML", "CSS", "MySQL", "SQL"],
        year: 2018,
        website: "https://github.com/josephmonreal00/quizapp",
        github: "https://github.com/josephmonreal00/quizapp",
      },
      {
        name: "Random Quote Generator",
        description: "Treehouse Techdegree Project 1",
        languages: ["JavaScript", "HTML", "CSS"],
        year: 2018,
        website: "https://josephmonreal00.github.io/techdegree-project-1/",
        github: "https://github.com/josephmonreal00/techdegree-project-1",
      },
      {
        name: "First Portfolio Ever",
        description: "Simple Portfolio written in 2017.",
        languages: ["HTML", "CSS", "CSS Grid"],
        website: "https://josephmonreal00.github.io/",
        year: 2017,
        github: "https://github.com/josephmonreal00/josephmonreal00.github.io",
      },
      {
        name: "Yoshimatsu",
        description: "Sushi Resturant in Tucson, AZ.",
        languages: ["HTML", "CSS", "CSS Grid"],
        year: 2017,
        website: "https://github.com/josephmonreal00/Yoshimatsu",
        github: "https://github.com/josephmonreal00/Yoshimatsu",
      },
    ],
  });
  return (
    <Container className="portfolioPadding">
      <Row>
        <Col md={2} lg={2} xl={2}>
          <p className="h5 text-primary">Projects</p>
        </Col>
        <Col>
          {projects.work.map((ele, idx) => (
            <Row
              xs={1}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              className={ele.name === "Angular Task Manager" ? "" : "pt-5"}
            >
              <Col>
                <span className="font-weight-bold">
                  {ele.name}
                  <a href={ele.website} target="_blank">
                    <ArrowRightAltIcon></ArrowRightAltIcon>
                  </a>
                </span>
              </Col>
              <Col className="pt-2">
                <span
                  className="font-weight-light"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {ele.description}
                </span>
              </Col>
              <Col className="pt-2">
                <span
                  className="font-weight-light"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Developed: {ele.year}
                </span>
              </Col>
              <Col className="pt-2">
                {ele.languages.map((ele, idx) => (
                  <>
                    <Button size="sm" variant="outline-primary">
                      {ele}
                    </Button>{" "}
                  </>
                ))}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
