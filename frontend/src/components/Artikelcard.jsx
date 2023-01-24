import "./Artikelcard.css";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Artikelcard = ({ img, text, title }) => {
  return (
    <>
      <NavLink id="card-link">
        <Card id="card-artikel">
          <Card.Img variant="top" src={img} id="img-artikelcard" />
          <Card.Body className="body-artikelcard">
            <Card.Text>
              <p className="text-artikelcard">{text}</p></Card.Text>
            <Card.Title><h1 className="title-artikelcard">{title}</h1></Card.Title>
          </Card.Body>
        </Card>
      </NavLink>
    </>
  )
}

export default Artikelcard;