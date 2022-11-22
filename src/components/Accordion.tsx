import Accordion from "react-bootstrap/Accordion";
import { SwitchComponent } from "./SwitchComponent";

export function CustomAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Click Here To Manage SubTasks</Accordion.Header>
        <Accordion.Body>
          Add subtasks here. Hit add button and then enter as many subtasks as
          you wish :-)
          <hr />
          <SwitchComponent />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
