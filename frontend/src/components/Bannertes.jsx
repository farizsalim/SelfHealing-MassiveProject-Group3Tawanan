import { Row, Col } from "react-bootstrap";
import { tes1, tes2, tes3 } from "../image";
import "./Bannertes.css";

const Bannertes = () => {
  return (
    <section className="banner-tes">
      <div className="d-flex justify-content-center">
        <div className="garis-banner"></div>
      </div>
      <Row className="g-3">
        <Col className="d-flex justify-content-center">
          <img src={tes1} alt="tes1" className="icontes" />
        </Col>
        <Col className="d-flex justify-content-center"><img src={tes2} alt="tes2" className="icontes" /></Col>
        <Col className="d-flex justify-content-center"><img src={tes3} alt="tes3" className="icontes" /></Col>
      </Row>
      <Row className="g-3">
        <Col className="d-flex justify-content-center">
          <h6 className="text-tes">Memerlukan waktu kurang dari 12 menit.</h6>
        </Col>
        <Col className="d-flex justify-content-center">
          <h6 className="text-tes">Jawab dengan jujur, bahkan jika Anda tidak menyukai jawabannya.</h6>
        </Col>
        <Col className="d-flex justify-content-center">
          <h6 className="text-tes">Cobalah untuk tidak memilih jawaban "netral".</h6>
        </Col>
      </Row>
    </section>
  );
}

export default Bannertes;