import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const languages = [
    { icon: meter1, name: "Java" },
    { icon: meter2, name: "Python" },
    { icon: meter3, name: "C/C++" },
    { icon: meter1, name: "SQL" },
    { icon: meter2, name: "PostgreSQL" },
    { icon: meter3, name: "MongoDB" },
  ];

  const frameworks = [
    { icon: meter1, name: "Spring Boot" },
    { icon: meter2, name: "React.js" },
    { icon: meter3, name: "AngularJS" },
    { icon: meter1, name: "Vue.js" },
    { icon: meter2, name: "Node.js" },
    { icon: meter3, name: "GraphQL" },
    { icon: meter1, name: "Django" },
  ];

  const tools = [
    { icon: meter1, name: "Git" },
    { icon: meter2, name: "Docker" },
    { icon: meter3, name: "Kubernetes" },
    { icon: meter1, name: "AWS" },
    { icon: meter2, name: "Prometheus & Grafana" },
    { icon: meter3, name: "Dynatrace" },
    { icon: meter1, name: "JMeter & Fiddler" },
  ];

  const softSkills = [
    { icon: meter1, name: "Leadership" },
    { icon: meter2, name: "Teamwork" },
    { icon: meter3, name: "Communication" },
    { icon: meter1, name: "Problem Solving" },
    { icon: meter2, name: "Analytical Thinking" },
  ];

  const [activeTab, setActiveTab] = useState('languages');
  const [tabIndexes, setTabIndexes] = useState({
    languages: 0,
    frameworks: 0,
    tools: 0,
    soft: 0,
  });
  const [itemsVisible, setItemsVisible] = useState(3);

  useEffect(() => {
    const updateItemsVisible = () => {
      const width = window.innerWidth;
      if (width >= 3000) setItemsVisible(5);
      else if (width >= 1024) setItemsVisible(3);
      else if (width >= 464) setItemsVisible(2);
      else setItemsVisible(1);
    };
    updateItemsVisible();
    window.addEventListener('resize', updateItemsVisible);
    return () => window.removeEventListener('resize', updateItemsVisible);
  }, []);

  const handleBeforeChange = (nextSlide) => {
    setTabIndexes(prev => ({ ...prev, [activeTab]: nextSlide }));
  };

  const renderCarousel = (skills, tabKey) => (
    <>
      <Carousel
        responsive={responsive}
        infinite={false}
        slidesToSlide={itemsVisible}
        beforeChange={(nextSlide) => handleBeforeChange(nextSlide)}
        className="owl-carousel owl-theme skill-slider"
      >
        {skills.map((skill, idx) => (
          <div className="item skill-item" key={idx}>
            <div className="skill-card">
              <img src={skill.icon} alt="Skill icon" />
              <h5>{skill.name}</h5>
            </div>
          </div>
        ))}
      </Carousel>
      <p className="skills-counter">
        Showing {Math.min(tabIndexes[tabKey] + 1, skills.length)}
        –{Math.min(tabIndexes[tabKey] + itemsVisible, skills.length)}
        of {skills.length} skills
      </p>
    </>
  );

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Explore my tech & soft skills — switch tabs and swipe to see more!</p>

              <Tab.Container id="skills-tabs" defaultActiveKey="languages" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav variant="pills" className="nav-pills custom-skill-tabs mb-5 justify-content-center align-items-center">
                  <Nav.Item>
                    <Nav.Link eventKey="languages">Languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="frameworks">Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tools">Tools</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="soft">Soft Skills</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="languages">{renderCarousel(languages, 'languages')}</Tab.Pane>
                  <Tab.Pane eventKey="frameworks">{renderCarousel(frameworks, 'frameworks')}</Tab.Pane>
                  <Tab.Pane eventKey="tools">{renderCarousel(tools, 'tools')}</Tab.Pane>
                  <Tab.Pane eventKey="soft">{renderCarousel(softSkills, 'soft')}</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Decorative background" />
    </section>
  );
};
