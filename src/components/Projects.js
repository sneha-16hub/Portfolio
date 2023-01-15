import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { InternshipCard } from "./InternshipCard";
import projImg1 from "../assets/img/be.jpeg";
import projImg2 from "../assets/img/qagl.jpeg";
import projImg3 from "../assets/img/ts.jpg";
import projImg13 from "../assets/img/optum.jpg";
import projImg23 from "../assets/img/solarl.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BEA",
      description: "Blockchain based Ecommerce Aplication",
      imgUrl: projImg1,
      link:"https://github.com/sneha-16hub/Blockchain-based-Ecommerce-Application",
    },
    {
      title: "QAGL",
      description: "Question Answer Generation from Lectures",
      imgUrl: projImg2,
      link:"https://github.com/sneha-16hub/QAGL--Question-answer-generation-from-lectures",
    },
    {
      title: "TravelSathi",
      description: "A cab Pooling Website",
      imgUrl: projImg3,
      link:"https://github.com/sneha-16hub/TravelSathi",
    }
    
  ];
  const internship = [
    {
      title: "Optum",
      description: "Worked as a SDE intern for a period of 2 months",
      imgUrl: projImg13,
      link:"https://drive.google.com/file/d/1DD9fQgTy2k_eK1EV2FMAcK5FUCldeQ1V/view",
    },
    {
      title: "SolarLabs",
      description: "Ongoing 6-month SDE intern",
      imgUrl: projImg23,
    }
  ];
  
  const achievement = [
    {
      title: "Walmart",
      description: "Worked as a SDE intern for a period of 2 months",
      imgUrl: projImg13,
      link:"https://drive.google.com/file/d/1DD9fQgTy2k_eK1EV2FMAcK5FUCldeQ1V/view",
    },
    {
      title: "SolarLabs",
      description: "Ongoing 6-month SDE intern",
      imgUrl: projImg23,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experiences So Far.....</h2>
                <p>Below i have listed some of my best projects along with their github links,Internship experiences and achivements.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                      <Nav.Link eventKey="second" >Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                      <Nav.Link eventKey="third">Achivements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" >
                    <Row>
                        {
                          internship.map((intern, index) => {
                            return (
                              <InternshipCard
                                key={index}
                                {...intern}
                                />
                            )
                          })
                        }
                      </Row>
                     </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          achievement.map((ach, index) => {
                            return (
                              <InternshipCard
                                key={index}
                                {...ach}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
