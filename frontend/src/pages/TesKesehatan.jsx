import { Container } from "react-bootstrap";
import "./TesKesehatan.css";
import Bannertes from "../components/Bannertes";
import Formtes from "../components/Formtes";
import Footer from "../components/Footer";
import { bglineartes, bgtes } from "../image";

const TesKesehatan = () => {
  return (
    <section>
      <img src={bglineartes} alt="bglineartes" className="bglineartes" />
      <img src={bgtes} alt="bgtes" className="bgtes"/>
      <Container>
        <div className="d-flex justify-content-center">
          <h1 className="title-tkes">Tes Kepribadian di SelfHealing.ID</h1>
        </div>
        <Bannertes/>
        <Formtes/>
        <Formtes/>
        <Formtes/>
        <Formtes/>
        <Formtes/>
      </Container>

      <Footer/>
    </section>
  )
}

export default TesKesehatan;