import { Card, Row, Col } from "react-bootstrap";
import "./Cardjkarir.css";
import { icontas, icondolar, iconlokasi, iconpengalamankerja } from "../image";
import { DETK } from "../routes";
import { NavLink } from "react-router-dom";

const Cardjkarir = ({ title, bidang, lokasi, gaji, pglmnkerja }) => {
  return (
    <section>
      <Card id="bodycard-karir">
        <Card.Title className="title-karir">{title}</Card.Title>
        <Card.Text>
          <Row className="g-2 mt-2">
            <Col>
              <div className="d-flex align-items-center">
                <img className="icon-karir" src={icontas} alt="icontas" />
                <div className="text-karir">{bidang}</div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center">
                <img className="icon-karir" src={iconlokasi} alt="iconlokasi" />
                <div className="text-karir">{lokasi}</div>
              </div>
            </Col>
          </Row>
          <div className="mt-3 d-flex align-items-center">
            <img className="icon-karir" src={icondolar} alt="icondolar" />
            <div className="text-karir">{gaji}</div>
          </div>
          <div className="mt-3 d-flex align-items-center">
            <img className="icon-karir" src={iconpengalamankerja} alt="iconpengalamankerja" />
            <div className="text-karir">{pglmnkerja}</div>
          </div>
        </Card.Text>
        <button className="btn-lamar">Lamar</button>
        <NavLink to={DETK}>
          <button className="btn-detail">Lihat Detail</button>
        </NavLink>
      </Card>
    </section>
  )
}

export default Cardjkarir;