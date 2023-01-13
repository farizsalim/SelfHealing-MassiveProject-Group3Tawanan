import { Container } from "react-bootstrap";
import Cardlist from "../components/CardList";
import { btroom } from "../image"; 
import "./TherapyRoom.css"

const Troom = () => {
    return(
        <section>
            <img className="backgroundtherapyroom" src={btroom} alt="backgroundtherapyroom" />
            <Container>
                <h1 className="titleruang text-center">Ruang Terapi</h1>
                <h1 className="quotes text-center">Tingkatkan Mood Setiap Harinya</h1>
            </Container>
            <Cardlist/>
        </section>
    )
}

export default Troom;