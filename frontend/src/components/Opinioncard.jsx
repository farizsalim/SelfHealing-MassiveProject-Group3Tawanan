import { user1 } from "../image";
import { Card } from "react-bootstrap";
import "./Opinioncard.css"

const Opinioncard = ({username}) => {
    return(
        <section>
            <Card id="cardbodyback">
                <Card id="opcardbody">
                    <img src={user1} alt="" className="userimg"/>
                    <section className="mt-5">
                        <Card.Title className="usernamecard text-center">Tes123</Card.Title>
                        <Card.Text className="comcard">Sangat baik, saya sudah 2 kali e-Counseling dan semuanya memuaskan. Sempat ada masalah teknis di kunjungan kedua tapi bisa diselesaikan dengan sangat baik.</Card.Text>
                        <Card.Text className="profcard text-center">Mahasiswa</Card.Text>
                    </section>
                </Card>
            </Card>
        </section>
    )
}

export default Opinioncard;