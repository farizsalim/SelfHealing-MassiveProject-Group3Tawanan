import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MeditationCard.css"

const MedCard = ({img,title,text,to}) => {
    return(
        <section>
            <Link to={to}>
                <Card className="text-center" id="therapycard">
                    <Card.Img className="imgtr" variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>
                                <h1 className="title-card">
                                    {title}
                                </h1>
                                </Card.Title>
                            <Card.Text className="text-card">
                            {text}
                            </Card.Text>
                        </Card.Body>
                </Card>
            </Link>
        </section>
    )
}

export default MedCard;