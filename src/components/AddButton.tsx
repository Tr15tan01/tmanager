import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface PropTypes {
  color: string;
  // handleClick: (e: React.MouseEvent) => void;
  onSubmit: (e: any) => void;
  task: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddButton: React.FC<PropTypes> = (props) => {
  return (
    <>
      <Form onSubmit={props.onSubmit}>
        <Form.Group>
          <Form.Label>Enter Task Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task Here..."
            value={props.task}
            onChange={props.onChange}
          />
          <Form.Text className="text-center">Some text will be here</Form.Text>
        </Form.Group>
      </Form>
      <Button
        variant={props.color}
        onClick={props.onSubmit}
        className="px-5 m-3"
        style={{ width: "100%" }}
      >
        Add Task
      </Button>
    </>
  );
};
