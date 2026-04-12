import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PizzaToppings = () => { 
    return (
        
        <Card>
            <Card.Body>
                <Card.Title
                className="mb-3"
                >
                    Choose your pizza toppings....
                </Card.Title>
                <Button
                    variant="outline-primary"
                >
                    All
                </Button>
                <Button
                className="ms-2"
                    variant="outline-primary"
                >
                    None
                </Button>
                <div>
                    Pizza toppings go here...
                </div>
                <h3>
                    Total: 0.00
                </h3>
            </Card.Body>
        </Card>
    );
}

export default PizzaToppings;