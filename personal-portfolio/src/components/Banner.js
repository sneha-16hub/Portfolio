import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import bannerImg from "../assets/img/banner-bg.png";
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
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [  "Final Year Undergraduate", "SDE intern @SolarLabs" ];
  const period = 2000;
  const [isShow, invokeModal] = useState(false)

  const initModal = () => {
     return invokeModal(!isShow)
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Col xs={1} md={1} xl={3}>
            
          </Col>
                <span className="tagline">Welcome to my Portfolio</span>
                <h2>{`Hi! I'm Sneha Devrani, `} <br></br></h2>
                <h4><span className="txt-rotate" dataPeriod="10" data-rotate='[ "Final Year Undergrad", "SDE intern @ SolarLabs"]'><span className="wrap">{text}</span></span></h4>
                  <p>Software Engineer with expertise in React.js, Spring Boot, GraphQL, and cloud-native architectures AWS, Kubernetes. 
Proven track record delivering scalable microservices, optimizing complex queries, and building user-focused, high
performance applications. Recognized for leadership, mentoring, and driving Agile delivery in fast-paced environments. </p>
                  <div>
                    <button style={{float:"left"}} onClick={initModal}>About Me <ArrowRightCircle/></button>
                    <a href="https://drive.google.com/drive/folders/1l_UkCjCtWTsdxv-B2BJuVxoxnjl8UmVM?usp=sharing" target="_blank">
                      <button style={{float:"right"}}>Resume <BsFillArrowDownCircleFill/></button>
                    </a>
                  </div>
                  

                  <Modal show={isShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton onClick={initModal}>
                        <Modal.Title style={{fontFamily:"Sans-serif", color:"black"}} ><b>Wanna Know me More...</b></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{fontFamily:"Sans-serif", color:"black", textAlign:"center"}}>    
                        <div><b>Name</b> : Sneha Devrani</div><br></br>
                        <div><b>Age</b> : 21</div><br></br>
                        <div><b>Educational Qualification</b> : BE-CSE(Final year student)</div><br></br>
                        <div><b>Institute</b> : Thapar Institute of Engineering and Technology</div><br></br>
                        <div><b>Graduation year</b> : 2023 </div><br></br>
                        <div><b>Current CGPA</b> : 9.29 </div><br></br>
                        <div><b>E-mail</b> : snehadevrani16@gmail.com</div><br></br>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="outlined" className="btn btn-outline-danger mb-3 px-5" onClick={initModal} >
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
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
