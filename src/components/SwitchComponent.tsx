import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ModalComponent } from "./index";

export function SwitchComponent() {
  const [isCheckedOne, setIsCheckedOne] = useState<boolean>(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState<boolean>(false);

  const checkData = [
    { id: "1", label: "switch one label", checked: true },
    { id: "2", label: "switch tow label", checked: false },
  ];

  const checkHandlerOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id, e.target.checked);
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

  const [singleCheck, setSingleCheck] = useState({ id: "", checked: false });
  const [chdata, setChdata] = useState([singleCheck]);

  //did not work until changed to ChangeEvent..
  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.checked, e.target.id);
    const id = e.target.id;
    const checked = e.target.checked;
    setSingleCheck({ id: id, checked: checked });
    // setChdata([...chdata, singleCheck]);
    console.log("chdata", chdata);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("chdata", chdata);
  };

  const addTask = () => {
    setChdata([...chdata, singleCheck]);
  };

  return (
    <Container className="m-2">
      <Form>
        {checkData.map((item: any) => {
          return (
            <>
              <Form.Check
                key={item.id}
                type="switch"
                id={item.id}
                label={item.label}
                onChange={checkHandler}
                // checked={item.checked}
              />
              <hr />
            </>
          );
        })}
      </Form>
      <div>
        {chdata.map((item) => {
          return (
            <p>
              {item.id} {item.checked.toString()}
            </p>
          );
        })}
      </div>
      <ModalComponent addTask={addTask} />
    </Container>
  );
}
