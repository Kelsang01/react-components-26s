import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Welcome";
import PizzaToppings from "./PizzaToppings";
import TsteeleComponent from "./TsteeleComponent";
import ThamiltonComponent from "./ThamiltonComponent";
import DweiseComponent from "./DweiseAccordionComponent";
import CBaresComponent from "./CBaresComponent";
import ZsmuckerbryanComponent from "./ZsmuckerbryanComponent";
import MrooneyButton from "./mrooneyButton";
import LmeierComponent from "./LmeierComponent";
import SkhangComponent from "./SkhangComponent";
import KnorbuComponent from './KnorbuComponent';

const App = () => {
  return (
    <div className="m-3">
      <h1>React Components</h1>
      <KnorbuComponent />
      <PizzaToppings />
      <TsteeleComponent />
      <Welcome />
      <ThamiltonComponent />
      <DweiseComponent />
      <CBaresComponent />
      <ZsmuckerbryanComponent />
      <MrooneyButton />
      <LmeierComponent />
      <SkhangComponent />
    </div>
  );
};

export default App;
