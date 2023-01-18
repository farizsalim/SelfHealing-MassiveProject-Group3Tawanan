import { Col, Container, Row } from "react-bootstrap"
import Footer from "../components/Footer";
import { bgkarir } from "../image";
import Cardjkarir from "../components/Cardjkarir";
import { icondokter, iconspeaker } from "../image";
import "./JenjangKarir.css"

const JenjangKarir = () => {
    return (
        <section>
            <img src={bgkarir} alt="bgkarir" className="bgkarir" />
            <Container>
                <h1 className="titlekarir">Jenjang Karir</h1>
                <p className="quoteskarir">Temukan karir kesehatan impianmu disini!</p>
                <section className="card-dokter">
                    <div className="mb-5 d-flex align-items-center">
                        <img src={icondokter} alt="icondokter" />
                        <div className="subtitle-karir">Dokter</div>
                    </div>
                    <Row xs={1} md={3} className="g-3">
                        <Col className="d-flex justify-content-center">
                            <Cardjkarir title="Dokter Spesialis penyakit dalam (Sp. PD)"
                            bidang="Healt" lokasi="Depok" gaji="Rp.17.000.000 - 20.000.000" pglmnkerja="1 - 3 Tahun"/>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Cardjkarir title="Dokter Spesialis Kedokteran Jiwa (Sp. KJ)"
                            bidang="Healt" lokasi="Bekasi" gaji="Rp.20.000.000 - 25.000.000" pglmnkerja="5 - 7 Tahun"/>
                        </Col>
                    </Row>
                </section>
                <section>
                <div className="mb-5 d-flex align-items-center">
                        <img src={iconspeaker} alt="iconspeaker" />
                        <div className="subtitle-karir">Human</div>
                    </div>
                    <Row xs={1} md={3} className="g-3">
                        <Col className="d-flex justify-content-center">
                            <Cardjkarir title="Relationship Officer"
                            bidang="Marketing" lokasi="Jakarta" gaji="Rp.4.000.000" pglmnkerja="Freshgraduate"/>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Cardjkarir title="Head of Human Resources"
                            bidang="Healt" lokasi="Yogyakarta" gaji="Rp.12.000.000 - 20.000.000" pglmnkerja="5 - 10 Tahun"/>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Cardjkarir title="Human Capital Manager"
                            bidang="Sales" lokasi="Palembang" gaji="Rp.9.500.000 - 12.000.000" pglmnkerja="1 - 3 Tahun"/>
                        </Col>
                    </Row>
                </section>
            </Container>
            <Footer />
        </section>
    )
}

export default JenjangKarir;