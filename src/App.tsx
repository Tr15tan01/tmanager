import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { AddButton, ModalComponent, NavTabs } from "./components";
import { logStyles } from "./utils/logStyles";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  // const handleClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   const newTask = task;
  //   setTasks([...tasks, newTask]);
  //   console.log("clicked", task);
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    console.log("%cchanginf", logStyles);
    console.log(`%c${e.target.value}`, { color: "green" });
  };

  //todo change any with corresponding event name
  const handleSubmit = (e: any) => {
    console.log("submitted");
    e.preventDefault();
    const newTask = task;
    setTasks([...tasks, newTask]);
    console.log("clicked", task);
    setTask("");
  };

  return (
    <Container fluid="md">
      <Row className="mt-5">
        <Col lg sm={8} className="text-center border border-primary p-5">
          <h3>App Component</h3>
          <AddButton
            color="outline-danger"
            // handleClick={handleSubmit}
            task={task}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Col>
        <Col className="text-center border border-secondary rounded">
          <h3>Tasks</h3>
          {tasks.length === 0 && "no tasks here"}
          {tasks.map((item, idx) => {
            return <p key={idx}>Task number: {item}</p>;
          })}
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <NavTabs />
          <ModalComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
