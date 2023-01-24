import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { Container } from "react-bootstrap";
import { bgartikel, bgkarir } from "../image";
import Cardlistblog from "../components/CardlistBlog";
import Footer from "../components/Footer";
import "./Blog.css";

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [])
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? <Loading /> :
        <section>
          <img className="bglinearblog" src={bgkarir} alt="bglinearblog" />
          <img className="bgblog" src={bgartikel} alt="bgblog" />
          <Container>
            <h1 className="titleblog text-center">SelfHealing.ID Blog</h1>
            <h1 className="subtitleblog text-center">Artikel kesehatan & karier</h1>
            <div className="d-flex justify-content-center">
              <input type="text" className="inputblog" placeholder="Cari artikel" />
            </div>
            <Cardlistblog />
          </Container>
          <Footer />
        </section>
      }
    </>
  )
};

export default Blog;