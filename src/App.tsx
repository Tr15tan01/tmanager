import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  AddButton,
  ModalComponent,
  NavTabs,
  ProgressBar,
  Tasks,
} from "./components";
// import { logStyles } from "./utils/logStyles";

function App() {
  //function for adding task
  const addTask = () => {
    console.log("task set");
  };

  return (
    <Container fluid="md">
      <Row>
        <Col className="mt-4 text-center">
          <ModalComponent addTask={addTask} />
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <NavTabs />
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <Tasks />
          {/* <ProgressBar percentage={66} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
