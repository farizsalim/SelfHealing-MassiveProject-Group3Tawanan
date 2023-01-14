import { Button, Col, Container,Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { bgsignup } from "../image";
import { LOGIN } from "../routes";
import "./RegSuccess.css"

const RegSuccess = () => {
    return(
        <section>
            <img className="backgroundsignup" src={bgsignup} alt="backgroundsignup" />
            <Container id="container-success" className="text-Center">
                <div className="bodysuccess">
                    <Row xs={1}>
                        <Col>
                            <p className="titlesuccess text-center">Welcome to SelfHealing.ID</p>
                        </Col>
                        <Col>
                        <NavLink to={LOGIN} className="textlog d-flex justify-content-center">
                            <Button id="loginbtn2">Ke Halaman Login</Button>
                        </NavLink>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer/>
        </section>
    )
} 

export default RegSuccess;