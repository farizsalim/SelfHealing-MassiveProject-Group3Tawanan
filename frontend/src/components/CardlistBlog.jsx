import { Container, Row, Col, Button } from "react-bootstrap";
import "./CardlistBlog.css"
import Blogcard from "./Blogcard";
import { Cardblog } from "../api/Data";

const Cardlistblog = () => {
  return (
    <section>
      <Container className="bodyblog px-5">
        <section>
          <h1 className="title-cardlistblog">Tampilkan semua artikel</h1>
          <Row xs={1} md={3} className="py-5">
            {Cardblog.map((val) => (
              <Col className="p-3 d-flex justify-content-center">
                <Blogcard title={val.title} imgblog={val.imgblog} editor={val.editor} histori={val.histori} />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-end align-items-end">
            <Button id="btn-next" ><p className="btn-txt">Berikutnya</p></Button>
          </div>
        </section>
      </Container>
    </section>
  )
}

export default Cardlistblog;