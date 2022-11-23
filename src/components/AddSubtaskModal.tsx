import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

interface SubTaskProps {
  addSubTask: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AddSubtaskModal({ addSubTask, handleChange }: SubTaskProps) {
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
    addSubTask();
    setShow(false);
  };

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Add New SubTask
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Subtask Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Subtask Here"
                name="subTask"
                onChange={handleChange}
                autoComplete="false"
                autoFocus
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
