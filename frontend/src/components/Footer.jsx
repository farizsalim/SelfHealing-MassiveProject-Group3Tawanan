import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./Footer.css"
import { logo2, emailvector,wavector,insta,fb,ytb,twit } from "../image";
import Cardcontact from "./Cardcontact";

const Footer = () => {
    return(
        <section className="body-footer pb-3">
            <Container>
                <Row>
                    <Col className="col-logo">
                        <img src={logo2} alt="logo" />
                        <p className="quotes-text">Kondisi kesehatan mental, seperti depresi atau kecemasan, adalah nyata</p>
                        <div className="media-social">
                            <NavLink className="icon-medsos">
                                <img src={insta} alt="instagram" />
                            </NavLink>
                            <NavLink className="icon-medsos">
                                <img src={ytb} alt="youtube" />
                            </NavLink>
                            <NavLink className="icon-medsos">
                                <img src={fb} alt="facebook" />
                            </NavLink>
                            <NavLink className="icon-medsos">
                                <img src={twit} alt="twitter" />
                            </NavLink>
                        </div>
                    </Col>
                    <Col className="px-5">
                        <p className="title-txt">Menu</p>
                        <NavLink>
                        <p className="navfoot-txt">Home</p>
                        </NavLink>
                        <NavLink>
                        <p className="navfoot-txt">Ruang Terapi</p>
                        </NavLink>
                        <NavLink>
                        <p className="navfoot-txt">Tes Kesehatan</p>
                        </NavLink>
                        <NavLink>
                        <p className="navfoot-txt">Blog/Artikel</p>
                        </NavLink>
                        <NavLink>
                        <p className="navfoot-txt">Jenjang Karir</p>
                        </NavLink>
                    </Col>
                    <Col className="px-5">
                        <p className="title-txt">Contact Us</p>
                        <Cardcontact img={emailvector} vartitle="Email :" vartxt="Selfhealing@id.com"/>
                        <Cardcontact img={wavector} vartitle="Whatsapp :" vartxt="0812-3582-3489"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;