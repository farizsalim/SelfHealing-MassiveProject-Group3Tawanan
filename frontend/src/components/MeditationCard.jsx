import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MeditationCard.css"

const MedCard = ({img,title,text}) => {
    return(
        <section>
            <NavLink id="card-link">
                <Card className="text-center" id="therapycard">
                    <Card.Img className="imgtr" variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>
                                <p className="title-card">
                                    {title}
                                </p>
                                </Card.Title>
                            <Card.Text className="text-card">
                            {text}
                            </Card.Text>
                        </Card.Body>
                </Card>
            </NavLink>
        </section>
    )
}

export default MedCard;