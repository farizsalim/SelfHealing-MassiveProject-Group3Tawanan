import { Container } from "react-bootstrap";
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
      </Container>
      <Footer />
    </section>
  )
};

export default Profile;