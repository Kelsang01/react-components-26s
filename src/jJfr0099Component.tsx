import { Card, Spinner } from "react-bootstrap";

const Jfr0099Component = () => {
    
    return (
        <Card className="my-3">
            <Card.Body>
                <Card.Title>
                    jfr-0099 Component
                </Card.Title>
                <div>
                  <p>The Spinner</p>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                 </Spinner>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Jfr0099Component;
