import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ModalComponent } from "./index";

export function SwitchComponent() {
  const [isCheckedOne, setIsCheckedOne] = useState<boolean>(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState<boolean>(false);

  const data = [{ chone: isCheckedOne }, { chtwo: isCheckedTwo }];

  const checkHandlerOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedOne(!isCheckedOne);
    // const item = localStorage.getItem("checked");
    // console.log({ item });
    // localStorage.setItem("checked", isCheckedOne.toString());
    // console.log({ item });
    // console.log({ isCheckedOne });
    // console.log(e.target.checked);
    console.log(data);
  };

  //did not work until changed to ChangeEvent..
  const checkHandlerTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedTwo(!isCheckedTwo);
    // const item = localStorage.getItem("checked");
    // localStorage.setItem("checked", isCheckedTwo.toString());
    // console.log({ item });
    console.log({ isCheckedTwo });
    console.log(e.target.checked);
  };

  // useEffect(() => {
  //   console.log("effect");
  //   const item = localStorage.getItem("checked");
  //   setIsChecked(!!item);
  //   console.log(item);
  // }, []);

  // useLayoutEffect(() => {
  //   console.log("layoutEffecg");
  // });

  return (
    <Container className="m-2">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch of you have completed task one"
          onChange={checkHandlerOne}
          checked={isCheckedOne}
        />
        <hr />
        <Form.Check
          type="switch"
          id="custom-switch1"
          label="Check this switch of you have completed task two"
          onChange={checkHandlerTwo}
          checked={isCheckedTwo}
        />
        <hr />
      </Form>
      <ModalComponent
        addTask={() => console.log("from navtans")}
        heading="test heading"
      />
    </Container>
  );
}
