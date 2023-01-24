import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import "./DetailKarir.css";
import { NavLink } from "react-router-dom";
import { JENK } from "../routes";

const DetailKarir = () => {
  return (
    <section className="detailkarir">
      <section className="banner-detailk">
        <Container>
          <NavLink to={JENK}>
            <button className="btnkembali-detail">{"< Kembali ke Role yang Tersedia"}</button>
          </NavLink>
          <h1 className="title-detailk">Dokter Spesialis penyakit dalam (Sp. PD)</h1>
          <Row md="auto">
            <Col className="subtitle-detailk">
              <p>CATEGORY</p>
              <p>Health</p>
            </Col>
            <Col className="subtitle-detailk">
              <p>LOCATION</p>
              <p>Depok, Indonesia</p>
            </Col>
            <Col className="subtitle-detailk">
              <p>EXPERIENCE</p>
              <p>1-3 Tahun</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <Card id="card-syarat">
              <Card.Body id="body-syarat">
                <Card.Title className="title-syarat">Persyaratan</Card.Title>
                <Card.Text className="text-syarat">
                  <p>- S1 profesi dr umum <br />
                    - Memiliki sertifikat ACLS dan ATLS masih aktif diutamakan<br />
                    - Memiliki STR dan bersedia membuat SIP<br />
                    - Bersedia purna waktu<br />
                    - Fresh graduate are welcome<br />
                    - S2 Dokter Spesialis<br />
                    - Memiliki STR dan bersedia membuat SIP<br />
                    - Bersedia purna waktu</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex flex-column align-items-end">
            <Card id="card-pendaftaran">
              <Card.Body id="body-pendaftaran">
                <Card.Title className="title-pendaftaran">Tanggal Pendaftaran</Card.Title>
                <Card.Text className="text-pendaftaran">
                  <p>1 - 28 Februari 2023</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card id="card-pendaftaran" className="mt-5">
              <Card.Body id="body-pendaftaran">
                <Card.Title className="title-pendaftaran">Perusahaan</Card.Title>
                <Card.Text className="text-pendaftaran">
                  <p>Rs. Mitra Keluarga</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  )
}

export default DetailKarir;