import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkhangComponent() {
  const [now, setNow] = useState(0);

  const increment = () => {
    now !== 100 ? setNow(now + 10) : setNow(now + 0);
  };

  const decrement = () => {
    now !== 0 ? setNow(now - 10) : setNow(now - 0);
  };

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Shaun's Progress Bar Component</Card.Title>
        <ProgressBar now={now} label={`${now}%`} variant="success" animated />
        <Button className="my-3" onClick={increment}>
          Increment Bar
        </Button>
        <Button className="ms-3" onClick={decrement}>
          Deincrement Bar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SkhangComponent;
