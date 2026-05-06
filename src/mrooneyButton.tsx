import { Dropdown, DropdownButton,Card, SplitButton } from "react-bootstrap";

const MrooneyButton = () => {
    return (
        <Card>
            <Card.Body className="mx-3">
                <Card.Title>Mike's Button</Card.Title>
                
                <DropdownButton id="dropdown-basic-button" title="Dropdown button" className="my-3">
                    <Dropdown.Item href="#/action-1">OH yea</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Push my buttons</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" disabled={true}>not this one</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">This one is ok</Dropdown.Item>                    
                </DropdownButton>

                <SplitButton title="Split Dropdown button" id="split-button" className="my-3">
                  <Dropdown.Item>Hover over the</Dropdown.Item>
                  <Dropdown.Item>2 parts of button</Dropdown.Item>
                </SplitButton><br />

                <SplitButton title="Split Dropup button" drop="up" id="split-button" className="my-3">
                  <Dropdown.Item>we can pick the</Dropdown.Item>
                  <Dropdown.Item>direction with the</Dropdown.Item>
                  <Dropdown.Item>drop prop</Dropdown.Item>
                  <Dropdown.Item>this one is drop="up"</Dropdown.Item>
                </SplitButton><br />
            
            
                <SplitButton title="Split Dropend button" drop="end" id="split-button" className="my-3">
                  <Dropdown.Item>this one is drop="end"</Dropdown.Item>
                  <Dropdown.Item>it goes right</Dropdown.Item>
                </SplitButton><br />
                
                <SplitButton title="Split Dropstart button" drop="start" id="split-button" className="my-3">
                  <Dropdown.Item>this one is drop="start"</Dropdown.Item>
                  <Dropdown.Item>it goes left</Dropdown.Item>
                </SplitButton>
                
            </Card.Body>
        </Card>
    );
};

export default MrooneyButton;