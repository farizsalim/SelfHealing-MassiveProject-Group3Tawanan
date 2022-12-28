import { Card } from "react-bootstrap";
import "./Cardcontact.css"

const Cardcontact = ({img,vartitle,vartxt}) => {
    return(
        <section>
            <Card id="bodycard">
                    <Card.Title className="cardtext">
                        <img className="imgcont" src={img} alt="conticon"/>
                        <p className="vartitle">{vartitle}</p>
                        <p className="vartxt">{vartxt}</p>
                    </Card.Title>
            </Card>
        </section>
    )
}

export default Cardcontact;