import { Button, Col, Container,Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { bgsignup } from "../image";
import { LOGIN } from "../routes";
import "./RegSuccess.css"
import { useState,useEffect } from "react";
import Loading from "../components/Loading";

const RegSuccess = () => {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => setLoading(false),1000);
        return () => clearTimeout(timer);
      }, [])
    return(
        <section>
        {loading? <Loading/> : (
            <section>
            <img className="backgroundsignup" src={bgsignup} alt="backgroundsignup" />
            <Container id="container-success" className="text-Center">
            <div className="bodysuccess">
                    <Row xs={1}>
                    <Col>
                    <p className="titlesuccess text-center">Registrasi Berhasil</p>
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
                    )}
                    </section>
                    )
                } 
                
                export default RegSuccess;