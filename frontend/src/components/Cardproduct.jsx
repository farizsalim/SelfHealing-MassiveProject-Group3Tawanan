import { Card } from "react-bootstrap";
import "./Cardproduct.css" 

const Cardproduct = ({img,text}) =>{
    return(
        <section>
            <Card id="cardbody">
                    <Card.Img className="p-3" variant="top" src={img} />
                    <Card.Title className="cardtext text-center">{text}</Card.Title>
            </Card>
        </section>
    )  
}

export default Cardproduct;