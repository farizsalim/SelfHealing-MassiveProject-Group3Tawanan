import { Container,Row,Col, Button } from "react-bootstrap";
import "./CardList.css"
import MedCard from "./MeditationCard";
import Footer from "./Footer";

const Cardlist = () => {
    return(
        <section>
            <Container className="bodytr d-flex justify-content-center px-5">
                <section>
                        <h1 className="titletherapy">Ruang Meditasimu</h1>
                            <Row xs={1} md={3} className="py-5">
                                <Col className="p-3 d-flex justify-content-center">
                                    <MedCard/>
                                </Col>
                                <Col className="p-3 d-flex justify-content-center">
                                    <MedCard/>
                                </Col>
                                <Col className="p-3 d-flex justify-content-center">
                                    <MedCard/>
                                </Col>
                                <Col className="p-3 d-flex justify-content-center">
                                    <MedCard/>
                                </Col>
                                <Col className="p-3 d-flex justify-content-center">
                                    <MedCard/>
                                </Col>
                                <Col className="p-3 d-flex justify-content-center">
                                    <MedCard/>
                                </Col>
                            </Row>
                        <div className="d-flex justify-content-end">
                            <Button id="btn-next" ><p className="btn-txt">Berikutnya</p></Button>            
                        </div>
                </section>
            </Container>
            <Footer/>
        </section>
    )
}

export default Cardlist;