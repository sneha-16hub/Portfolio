import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sneha-devrani/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/sneha-16hub/" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://leetcode.com/snehadevrani/" target="_blank"><img src={navIcon3} alt="" /></a>
              
            </div>
            <p>&#169; 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
