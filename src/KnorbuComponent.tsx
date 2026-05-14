import { Card, ProgressBar } from 'react-bootstrap';

const KnorbuComponent = () => {

  return (
        <Card
            className='my-3'
        >
            <Card.Body>
                <Card.Title>
                    Kelsang's Component
                </Card.Title>
                <div>
                    <ProgressBar now={60} />
                </div>
            </Card.Body>
        </Card>
    );
}

export default KnorbuComponent