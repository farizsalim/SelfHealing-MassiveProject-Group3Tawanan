import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { therapy1 } from "../image";
import "./MeditationCard.css"

const MedCard = () => {
    return(
        <section>
            <NavLink>
                <Card className="text-center" id="therapycard">
                    <Card.Img className="imgtr" variant="top" src={therapy1} />
                        <Card.Body>
                            <Card.Title>Restful Sleep Night</Card.Title>
                            <Card.Text>
                            7-10 Menit
                            </Card.Text>
                        </Card.Body>
                </Card>
            </NavLink>
        </section>
    )
}

export default MedCard;