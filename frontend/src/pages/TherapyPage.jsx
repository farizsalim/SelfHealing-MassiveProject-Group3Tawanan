import { useEffect,useState } from "react";
import Loading from "../components/Loading";
import { btroom } from "../image";
import { Medroom } from "../api/Data";
import { useParams } from "react-router-dom";
import {Row,Col,Container} from "react-bootstrap"
import "./TherapyPage.css"
import Footer from "../components/Footer";

const TherapyPage = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => setLoading(false),200);
        return () => clearTimeout(timer);
    }, [])
    const [loading,setLoading] = useState(true)

    const {therapyid} = useParams();
    const thisTherapy = Medroom.find((val) => val.id === therapyid)


    return( 
        <section>
            {loading? <Loading/> :
            <section>
                <img className="backgroundtherapyroom" src={btroom} alt="backgroundtherapyroom" height={"1650px"}/>
                <Container>
                    <h1 className="titleruang text-center">Ruang Terapi</h1>
                    <h1 className="quotes text-center">Tingkatkan Mood Setiap Harinya</h1>
                </Container>
                <Container className="bodytherapy px-5 mt-5">
                    <section>
                        <section className="mb-3">
                            <h1 className="title-Therapy">{thisTherapy.title}</h1>
                            <h4 className="text-therapy">{thisTherapy.text}</h4>
                            <h1 className="quotes-therapy">{thisTherapy.quotes}</h1>
                        </section>
                        <h1 className="title-Therapy">Challenge Harianmu !</h1>
                        <hr className="line" width={"200rem"}/>
                        <Row xs={6} md={6} key={thisTherapy.id}>
                            {thisTherapy.theraphy.map((val) =>(
                                <Col className="p-3 d-flex justify-content-center" key={val.cid}>
                                    <img src={val.challenge} alt="" />
                                </Col>
                            ))}
                            
                        </Row>
                        <hr className="line" width={"100%"}/>
                        <video width="100%" controls className="video">
                            <source src="mov_bbb.mp4" type="video/mp4"/>
                            <source src="mov_bbb.ogg" type="video/ogg"/>
                            Your browser does not support HTML video.
                        </video>
                    </section>
                </Container>
            </section>
            }
            <Footer/>
        </section>
    )
}

export default TherapyPage;