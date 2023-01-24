import {Col, Container, Row} from "react-bootstrap"
import Cardbanner from "../components/Cardbanner"
import Cardproduct from "../components/Cardproduct"
import Cardslider from "../components/Cardslider"
import Footer from "../components/Footer"
import { homebackg, leaves1, product1,product2,product3} from "../image"
import "./Home.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useEffect } from "react"
import { useState } from "react";
import Loading from "../components/Loading"

const Home = () => {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => setLoading(false),200);
        return () => clearTimeout(timer);
        }, [])
    return(
        <section>
            {loading? <Loading/> : (
        <section className="Home">
            <img className="backgroundhome" src={homebackg} alt="backgroundhome" />
            <AnimationOnScroll animateIn="animate__fadeInRight" initiallyVisible={true}>
                <Container className="homeslogan animate__animated animate__fadeInRight">
                    <h1 className="slogantext text-center">Welcome to</h1>
                    <h1 className="slogantext text-center">SelfHealing.ID</h1>
                </Container>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft" initiallyVisible={true}>
                <Container className="homeslogan2 animate__animated animate__fadeInLeft">
                    <h1 className="slogantext2">Kondisi kesehatan mental, seperti depresi atau kecemasan, adalah nyata, umum dan dapat diobati dan pemulihan adalah sesuatu yang mungkin.</h1>
                    <button className="btnslogan rounded-pill"><h1 className="btnslogantx">Get Started</h1></button>
                </Container>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown">
                <Container className="homeslogan3 d-flex justify-content-center text-center">
                    <h1 className="slogantext3">Kenapa harus konseling di SelfHealing.ID?</h1>
                </Container>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInDown">
                <Container className="d-flex justify-content-center">
                        <img className="iconimg" src={leaves1} alt="icon" />
                            <Row xs={1} md={3} className="g-3 ">
                                <Col>
                                    <Cardproduct img={product1} text="Bebas cerita dimana saja, kapan saja"/>
                                </Col>
                                <Col>
                                    <Cardproduct img={product2} text="Psikiater dan Psikologi yang berpengalaman"/>
                                </Col>
                                <Col>
                                    <Cardproduct img={product3} text="Self Healing.ID menyediakan berbagai jenis layanan kesehatan mental "/>
                                </Col>
                            </Row>
                </Container>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <Container className="bodybanner d-flex justify-content-center">
                    <Cardbanner title="Bagaimana cara kerjanya?" text="Setelah tes kesehatan mental Anda, Anda akan melihat informasi, sumber daya, dan alat untuk membantu Anda memahami dan meningkatkan kesehatan mental Anda."
                    text2="Alat skrining online dimaksudkan untuk menjadi gambaran singkat tentang kesehatan mental Anda. 
                    Jika hasil Anda menunjukkan bahwa Anda mungkin mengalami gejala penyakit mental, pertimbangkan untuk membagikan
                    hasil Anda dengan seseorang. Penyedia kesehatan mental (seperti dokter atau terapis) dapat memberi Anda penilaian
                    lengkap dan berbicara dengan Anda tentang pilihan bagaimana merasa lebih baik."
                    />
                </Container>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUpBig">
                <Container className="homeslogan4 d-flex justify-content-center text-center">
                    <h1 className="slogantext4">Apa kata mereka di SelfHealing.ID</h1>
                </Container>
                <Container className="d-flex justify-content-center" >
                    <Cardslider/>
                </Container>
            </AnimationOnScroll>
            <Footer/>
        </section>
        )}
    </section>
    )
}

export default Home;