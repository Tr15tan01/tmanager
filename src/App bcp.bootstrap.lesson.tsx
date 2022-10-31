import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container fluid="md">
      <Row className="mt-5">
        <Col lg sm={8} className="text-center border border-primary">
          <h3>App Component</h3>
        </Col>
        <Col className="text-center border border-secondary rounded">
          <h3>Side Text</h3>
        </Col>
      </Row>
      <Row className="m-5">
        <Col xs lg={6} className="text-center border border-primary">
          <h3>Second row</h3>
        </Col>
        <Col className="text-center border border-primary">
          <h3>Second row</h3>
        </Col>
        <Col className="text-center border border-primary">
          <h3>Second row</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
