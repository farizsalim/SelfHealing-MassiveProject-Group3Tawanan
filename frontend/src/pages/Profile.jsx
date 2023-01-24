import { useEffect,useState } from "react";
import { Container, Card } from "react-bootstrap";
import Footer from "../components/Footer"
import Loading from "../components/Loading";
import "./Profile.css";


const Profile = () => {
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setLoading(false),200);
    return () => clearTimeout(timer);
  }, [])
  return (
    <section>
      {loading? <Loading/> : (
        <Container>
        <div>
          <h1 className="title-aktivitas">Aktivitas</h1>
          <div className="line-aktivitas"></div>
        </div>
      </Container>
      )}
      <Footer />
    </section>
  )
};

export default Profile;