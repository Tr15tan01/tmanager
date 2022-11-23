import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ToastOnStart } from "./index";

interface TaskProps {
  addTask: () => void;
  heading: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  taskTitle: string;
  description: string;
}

export function AddTaskModal({
  addTask,
  heading,
  handleChange,
  email,
  taskTitle,
  description,
}: TaskProps) {
  //show hide modal
  const [show, setShow] = useState(false);

  //add addTask function to closing function
  const handleClose = () => {
    setShow(false);
  };
  //show modal function
  const handleShow = () => setShow(true);

  //submit function
  const handleSubmit = () => {
    addTask();
    setShow(false);
  };

  //tooltip
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Hit this button to add new task
    </Tooltip>
  );

  return (
    <>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 300 }}
        overlay={renderTooltip}
      >
        <Button variant="outline-success" onClick={handleShow}>
          Add New Task
        </Button>
      </OverlayTrigger>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add New Task"
                name="email"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                name="taskTitle"
                placeholder="Add Task Here"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
