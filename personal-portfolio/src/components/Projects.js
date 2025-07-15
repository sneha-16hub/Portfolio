import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { InternshipCard } from "./InternshipCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/be.jpeg";
import projImg2 from "../assets/img/qagl.jpeg";
import projImg3 from "../assets/img/ts.jpg";
import projImgWalmart from "../assets/img/walmart.jpg";
import projImgOptum from "../assets/img/optum.jpg";
import projImgSolar from "../assets/img/solarl.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const experience = [
    {
      title: "Walmart Global Tech",
      description: "Software Engineer (2 yrs) — Built full-stack microservices with Spring Boot & React, GraphQL APIs, BigQuery, AWS, Kubernetes, Prometheus.",
      imgUrl: projImgWalmart,
      link: "https://www.walmartglobaltech.com/",
    },
    {
      title: "Arka260 (solarLabs)",
      description: "SDE Intern (6 mos) — Developed CRM UI in Vue.js, built bulk lead import with Django REST & AWS S3.",
      imgUrl: projImgSolar,
      link: "https://arka360.com/in",
    },
    {
      title: "Optum",
      description: "SDE Intern (2 mos) — Built admin dashboard in AngularJS & REST APIs with Spring Boot + PostgreSQL.",
      imgUrl: projImgOptum,
      link: "https://www.optum.com/",
    }
  ];

  const projects = [
    {
      title: "Blockchain E-commerce App",
      description: "NFT-based warranty management system for e-commerce",
      imgUrl: projImg1,
      link: "https://github.com/sneha-16hub/Blockchain-based-Ecommerce-Application",
    },
    {
      title: "QAGL",
      description: "AI-powered Question Answer Generation from Lectures",
      imgUrl: projImg2,
      link: "https://github.com/sneha-16hub/QAGL--Question-answer-generation-from-lectures",
    },
    {
      title: "TravelSathi",
      description: "A cab pooling web application",
      imgUrl: projImg3,
      link: "https://github.com/sneha-16hub/TravelSathi",
    }
  ];

  const achievements = [
    "🏆 Winner of \"Re-imagining the Retail Tech\" SparkTech Challenge at Walmart among 450+ teams.",
    "🎖️ Awarded Speedster and Learning Champion badges for high performance and rapid delivery.",
    "🎓 Ranked #2 in department among 1,000+ peers at Thapar Institute with back-to-back merit scholarships.",
    "🤝 Mentored juniors and served as Technical Head for Campus Tech Fest, driving event execution and learning."
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Key Highlights</h2>
                  <p>Explore my professional experience, notable projects, and key achievements below. Hover them ony by one to know more</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center flex-wrap" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Roles</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Awards</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {experience.map((exp, index) => (
                            <InternshipCard key={index} {...exp} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="achievement-list">
                          <ul>
                            {achievements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative background" />
    </section>
  );
};
