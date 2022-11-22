// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CustomAccordion, ProgressBar } from "./index";

interface TabsProps {
  header: string;
  title: string;
  description: string;
  createdAt: string;
  percentage: number;
}

function NavTabs({
  header,
  title,
  description,
  createdAt,
  percentage,
}: TabsProps) {
  return (
    <Card className="text-center mt-3">
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ProgressBar percentage={percentage} width={90} />
        <CustomAccordion />
      </Card.Body>
      <Card.Footer className="text-muted">{createdAt}</Card.Footer>
    </Card>
  );
}

export default NavTabs;
