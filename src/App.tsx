import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { AddTaskModal, NavTabs } from "./components";
import uuid from "react-uuid";

function App() {
  //function for adding task
  const addTask = () => {
    console.log("task set");
    setTasks([
      ...tasks,
      <NavTabs
        header={taskData.email}
        title={taskData.taskTitle}
        description={taskData.description}
        createdAt={new Date().toLocaleString()}
        percentage={34}
      />,
    ]);
  };

  //geyt input value
  const [taskData, setTaskData] = useState({
    email: "",
    taskTitle: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setEmail(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setTaskData({ ...taskData, [name]: value });
  };

  console.log(taskData);

  const [tasks, setTasks] = useState<JSX.Element[]>([]);
  const [heading, setHeading] = useState("heading here");
  return (
    <Container fluid="md">
      <Row>
        <Col className="mt-4 text-center">
          <AddTaskModal
            addTask={addTask}
            heading={heading}
            handleChange={handleChange}
            email={taskData.email}
            taskTitle={taskData.taskTitle}
            description={taskData.description}
          />
        </Col>
      </Row>

      <Row>
        <Col className="mt-4">
          {/* <ProgressBar percentage={66} /> */}
          {tasks.map((item) => {
            return <div key={uuid()}>{item}</div>;
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
