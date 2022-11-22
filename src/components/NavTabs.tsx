// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CustomAccordion, ProgressBar, ModalComponent } from "./index";

interface TabsProps {
  header: string;
  title: string;
  description: string;
}

function NavTabs({ header, title, description }: TabsProps) {
  return (
    <Card className="text-center">
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <ProgressBar percentage={33} width={90} />
        <CustomAccordion />
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default NavTabs;
