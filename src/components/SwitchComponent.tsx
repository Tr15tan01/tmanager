import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useEffect, useLayoutEffect, useState } from "react";
import { ModalComponent } from "./index";

export function SwitchComponent() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    const item = localStorage.getItem("checked");
    localStorage.setItem("checked", isChecked.toString());
    console.log({ item });
    console.log({ isChecked });
  };

  useEffect(() => {
    console.log("effect");
    const item = localStorage.getItem("checked");
    setIsChecked(!!item);
    console.log(item);
  }, []);

  useLayoutEffect(() => {
    console.log("layoutEffecg");
  });

  return (
    <Container className="m-2">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch of you have completed task one"
          onChange={checkHandler}
          checked={isChecked}
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
      <ModalComponent addTask={() => console.log("from navtans")} />
    </Container>
  );
}
