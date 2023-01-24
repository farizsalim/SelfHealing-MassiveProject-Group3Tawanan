import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Cardlist from "../components/CardList";
import { btroom } from "../image"; 
import "./TherapyRoom.css"
import Loading from "../components/Loading";
import { useState } from "react";

const Troom = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => setLoading(false),200);
        return () => clearTimeout(timer);
    }, [])
    const [loading,setLoading] = useState(true)
    return( 
        <section>
            {loading? <Loading/> :
            <section>
                <img className="backgroundtherapyroom" src={btroom} alt="backgroundtherapyroom" />
                <Container>
                    <h1 className="titleruang text-center">Ruang Terapi</h1>
                    <h1 className="quotes text-center">Tingkatkan Mood Setiap Harinya</h1>
                </Container>
                <Cardlist/>
            </section>
            }
        </section>
    )
}

export default Troom;