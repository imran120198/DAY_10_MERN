import "./App.css";
import HeavyComputationComponent from "./Components/HeavyComputationComponent";

function App() {
  const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
  return (
    <div className="App">
      <h2>Heavy Computation Component</h2>
      <HeavyComputationComponent items={items} />
    </div>
  );
}

export default App;
