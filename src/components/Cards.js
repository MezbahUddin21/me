import { Col } from "react-bootstrap";


export const Cards = ({ title, descrption, img }) => {
  return (
    <Col size={12} sm={6} md={4} className='img-col'>
      <div className="img-box">
        <img src={img} className="img-fluid project-img"/>
        <div className="over-box">
          <h4>{title}</h4>
          <span>{descrption}</span>
        </div>
      </div>
    </Col>
  );
};