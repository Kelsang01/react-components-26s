import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { dummyPizzaToppingsFromApi } from "./dummy-pizza-toppings";

const PizzaToppings = () => { 

//
//React hooks
//
const [availablePizzaToppings, setAvailablePizzaToppings] = useState(
    dummyPizzaToppingsFromApi.map(
        x => ({
            ...x, 
            checked: false,
        })
    )
);
//
//Calculate derived state and other code
//

//
//Return JSX...
//
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
                {
                    availablePizzaToppings.map(
                        x => (
                            <div
                                className="my-2"
                            >
                                {
                                    `${x.name} (${x.price})`
                                }
                            </div>
                        )
                    )
                }
                
                <h3>
                    Total: 0.00
                </h3>
            </Card.Body>
        </Card>
    );
}

export default PizzaToppings;