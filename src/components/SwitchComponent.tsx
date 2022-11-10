import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export function SwitchComponent() {
  const checkHandler = () => {
    console.log("checked");
  };

  return (
    <Container className="m-2">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch of you have completed task one"
          onChange={checkHandler}
        />
        <hr />
        <Form.Check
          type="switch"
          id="custom-switch1"
          label="Check this switch of you have completed task two"
          onChange={checkHandler}
        />
        <hr />
      </Form>
    </Container>
  );
}
