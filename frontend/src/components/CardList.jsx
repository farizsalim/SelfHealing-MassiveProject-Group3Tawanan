import { Container,Row,Col,Button } from "react-bootstrap";
import "./CardList.css"
import MedCard from "./MeditationCard";
import Footer from "./Footer";
import { Medroom } from "../api/Data";

const Cardlist = () => {
    return(
        <section>
            <Container className="bodytr px-5">
                <section>
                        <h1 className="titletherapy">Ruang Meditasimu</h1>
                            <Row xs={1} md={3} className="py-5">
                                {Medroom.map((val) =>(
                                    <Col className="p-3 d-flex justify-content-center">
                                        <MedCard title={val.title} img={val.img} text={val.text}/>
                                    </Col>
                                ))}
                            </Row>
                        <div className="d-flex justify-content-end align-items-end">
                            <Button id="btn-next" ><p className="btn-txt">Berikutnya</p></Button>            
                        </div>
                </section>
            </Container>
            <Footer/>
        </section>
    )
}

export default Cardlist;