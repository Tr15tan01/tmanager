import Accordion from "react-bootstrap/Accordion";
import { SwitchComponent } from "./SwitchComponent";

export function CustomAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniamia deserunt mollit anim id est laborum.
          <SwitchComponent />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
