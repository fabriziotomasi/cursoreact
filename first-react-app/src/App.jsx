import "./App.css";
/* import Chicken from "./Chicken"; */
/* import Greeter from "./Greeter"; */
import Die from "./Die";

function App() {
  return (
    <div>
      {/*       <Greeter person="Bill" from="fa" />
      <Greeter person="Ted" from="fa" />
      <Greeter person="Rosa" from="Elton" /> */}
      <Die numSides={20} />
      <Die />
      <Die />
    </div>
  );
}

export default App;
