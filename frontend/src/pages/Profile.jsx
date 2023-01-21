import { Container } from "react-bootstrap";
import Footer from "../components/Footer"
import "./Profile.css";

const Profile = () => {
  return (
    <section>
      <Container>
        <div className="aktivity">
          <div className="title-profile">
            <h1>Aktivitas</h1>
            <div className="line-profile"></div>
          </div>
          <div className="card-aktivity">
            <div className="hcard-aktivity">
              <h1>Deskripsikan mood kamu hari ini</h1>
            </div>
            <div className="tcard-aktivity">
              <input type="text" name="textaktivity" className="text-akitivity" placeholder="mood kamu hari ini..." />
            </div>
            <div className="d-flex justify-content-end mt-5">
              <button className="btn-aktivity">Lihat semua</button>
            </div>
          </div>
        </div>
        <div className="mb-5">
        <div className="title-profile">
            <h1>Grafik moodmu</h1>
            <div className="line-profile"></div>
          </div>
          <div className="card-aktivity">
            <div className="hcard-aktivity">
              <h1>Deskripsikan mood kamu hari ini</h1>
            </div>
            <div className="tcard-aktivity">
              <input type="text" name="textaktivity" className="text-akitivity" placeholder="mood kamu hari ini..." />
            </div>
            <div className="d-flex justify-content-end mt-5">
              <button className="btn-aktivity">Lihat semua</button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </section>
  )
};

export default Profile;