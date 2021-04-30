import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="root-app">
      <div className="nextrip-bg my-4">
        <div className="container">
          <div className="page-title">
            <h1> NexTrip </h1>
          </div>
        </div>
      </div>
      Choose Route <Button variant="outline-primary"> Primary </Button>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      Choose direction Choose Stops
    </div>
  );
}

export function MagicApp() {
    // const [state, setState] = useState("CLICK ME");

    // return <button onClick={() => setState("CLICKED")}>{state}</button>;
    return <button >Boom!</button>;
}

export default App;
