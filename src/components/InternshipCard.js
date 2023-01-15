import { Col } from "react-bootstrap";


export const InternshipCard= ({ title, description, imgUrl ,link}) => {
  return (
    <Col size={12} sm={6} md={6}>
    <a style={{fontFamily:"arial", color:"white"}}  href={link}>
      <div className="proj-imgbx">
          <img style={{height:250}}src={imgUrl} />
        
         
        <div className="proj-txtx">
          <h4>{title}</h4>
        
          <span>{description}</span>
        </div>
      </div></a>
    </Col>
  )
}
