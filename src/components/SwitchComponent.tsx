import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import uuid from "react-uuid";
import React, { useState } from "react";
import { AddSubtaskModal } from "./index";

export function SwitchComponent() {
  // const checkHandlerOne = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.id, e.target.checked);
  // };

  // const checkHandlerTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsCheckedTwo(!isCheckedTwo);
  //   // const item = localStorage.getItem("checked");
  //   // localStorage.setItem("checked", isCheckedTwo.toString());
  //   // console.log({ item });
  //   console.log({ isCheckedTwo });
  //   console.log(e.target.checked);
  // };

  const [chdata, setChdata] = useState<JSX.Element[]>([]);

  const [subTask, setSubTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // //did not work until changed to ChangeEvent..
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const subTaskData = e.target.value;
    setSubTask(subTaskData);
  };

  //Add subtask to subtasks list
  const addSubTask = () => {
    setChdata([...chdata, <FormCheck />]);
  };

  //get checks data
  const [subTaskData, setSubTaskData] = useState({});

  const [subTasksData, setSubTasksData] = useState<any[]>([]);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const id = e.target.id;
    console.log(name, checked, id);
    setSubTaskData({ ...subTaskData, [name]: checked });
    setSubTasksData([...subTasksData, subTaskData]);
  };

  console.log(subTaskData);
  // console.log("subTasksData", subTasksData);

  const FormCheck = () => {
    return (
      <>
        <Form.Check
          key={uuid()}
          type="switch"
          id={uuid()}
          name={subTask}
          label={subTask}
          onChange={checkHandler}
          // checked={isChecked}
          value={subTask}
        />
        <hr />
      </>
    );
  };

  return (
    <Container className="m-2">
      <Form>
        {chdata.map((item: any, idx: number) => {
          return <div key={idx}>{item}</div>;
        })}
      </Form>
      <AddSubtaskModal addSubTask={addSubTask} handleChange={handleChange} />
      <p>is ot is not</p>
    </Container>
  );
}
