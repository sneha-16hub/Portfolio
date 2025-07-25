import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150); // faster rotation
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full Stack Developer",
    "Spring Boot Specialist",
    "React.js Developer",
    "Cloud Native Developer"
  ];

  const period = 1000; // shorter pause for faster loop
  const [isShow, invokeModal] = useState(false);

  const initModal = () => {
    invokeModal(!isShow);
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2>Hi! I'm Sneha Devrani</h2>
                  <h4>
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h4>
                  <p>
                    Software Engineer with 2 years of experience designing and developing scalable full-stack applications and microservices using Java, Spring Boot, React.js, and GraphQL. Skilled in performance testing, API development, and cloud-native architectures with Docker, Kubernetes, and AWS. Proven experience delivering reliable, high-performance solutions at Walmart Global Tech, ARKA Energy, and Optum, with a focus on Agile development and clean, maintainable code.
                  </p>
                  <p>
                    I’m currently open to new opportunities where I can contribute my skills and grow as a software engineer. Explore this portfolio to learn more about my work, skills, and achievements.
                  </p>

                  <div>
                    <button style={{ float: "left" }} onClick={initModal}>
                      About Me <ArrowRightCircle />
                    </button>
                    <a href="https://drive.google.com/drive/folders/1l_UkCjCtWTsdxv-B2BJuVxoxnjl8UmVM?usp=sharing" target="_blank" rel="noreferrer">
                      <button style={{ float: "right" }}>
                        Resume <BsFillArrowDownCircleFill />
                      </button>
                    </a>
                  </div>

                  <Modal
                    show={isShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="about-modal"
                  >
                    <Modal.Header closeButton onClick={initModal}>
                      <Modal.Title>
                        Want to Know Me More?
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <div className="about-content">
                        <div><span className="label">Name:</span> Sneha Devrani</div>
                        <div><span className="label">Education:</span> B.E. in Computer Science and Engineering</div>
                        <div><span className="label">Institute:</span> Thapar Institute of Engineering and Technology</div>
                        <div><span className="label">Graduation Year:</span> 2023</div>
                        <div><span className="label">Based in:</span> Bengaluru, India</div>
                        <div><span className="label">Email:</span> snehadevrani16@gmail.com</div>
                      </div>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button
                        variant="outlined"
                        className="btn btn-outline-danger mb-3 px-5"
                        onClick={initModal}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
