import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MrooneyButton from './mrooneyButton';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaToppings from "./PizzaToppings";
import TsteeleComponent from "./TsteeleComponent";
import Welcome from "./Welcome";
import ThamiltonComponent from "./ThamiltonComponent";

const App = () => {
  return (
    <div className="m-3">
      <h1>React Components</h1>
      <PizzaToppings />
      <MrooneyButton />
      <TsteeleComponent />
      <Welcome />
      <ThamiltonComponent />
    </div>
  );
};

export default App;
