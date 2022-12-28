import { Card, Container } from "react-bootstrap";
import { leaves2 } from "../image";
import "./Cardbanner.css" 

 const Cardbanner = ({title,text,text2}) =>{
    return(
        <section>
            <Container>
                <Card id="cardbanner">
                        <Card.Text className="bannertitle" >{title}</Card.Text>
                        <Card.Text className="bannertxt">{text}</Card.Text>
                        <Card.Text className="bannertxt"><b>Harap Diperhatikan : </b>{text2}</Card.Text>
                        <img src={leaves2} alt="icon" className="iconimage"/>
                </Card>
            </Container>
        </section>
    )  
 }

 export default Cardbanner;