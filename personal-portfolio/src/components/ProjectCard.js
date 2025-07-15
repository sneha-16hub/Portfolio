import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{ height: 250 }} src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <div style={{ marginTop: "10px" }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                🔗Github Link →
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
