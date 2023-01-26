import { Container, Row, Col, Button } from "react-bootstrap";
import "./CardListTherapy.css"
import { Cardblog } from "../api/Data";

const CardListTherapy = () => {
  return (
    <section>
      <Container className="bodyblog px-5">
        <section>
          <h1 className="title-cardlistTherapy">Restful Sleep at Night</h1>
          <Row xs={1} md={7} className="py-5">
            {/* {Cardblog.map((val) => (
            //   <Col className="p-3 d-flex justify-content-center">
            //     <Blogcard title={val.title} imgblog={val.imgblog} editor={val.editor} histori={val.histori} />
            //   </Col>
            ))} */}
          </Row>
        </section>
      </Container>
    </section>
  )
}

export default CardListTherapy;