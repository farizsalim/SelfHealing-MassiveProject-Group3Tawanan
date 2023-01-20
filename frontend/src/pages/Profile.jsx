import { Container, Card } from "react-bootstrap";
import Footer from "../components/Footer"
import "./Profile.css";

const Profile = () => {
  return (
    <section>
      <Container>
        <div>
          <h1 className="title-aktivitas">Aktivitas</h1>
          <div className="line-aktivitas"></div>
        </div>
        <Card style={{ borderStyle: "none" }}>
          <Card.Body className="card-aktivity">
            <Card.Title>
              <h1 className="hcard-aktivity">Deskripsikan mood kamu hari ini</h1>
            </Card.Title>
            <Card.Text className="tcard-aktivity">
              <h3>mood kamu hari ini...</h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </section>
  )
};

export default Profile;