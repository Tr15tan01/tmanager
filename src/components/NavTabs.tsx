// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CustomAccordion, ProgressBar, ModalComponent } from "./index";

interface TabsProps {
  header: string;
}

function NavTabs({ header }: TabsProps) {
  return (
    <Card className="text-center">
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <ProgressBar percentage={33} width={90} />
        <CustomAccordion />
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default NavTabs;
