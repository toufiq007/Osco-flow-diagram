import "./App.css";
import FlowDiagram from "./components/flow/Flow";
import ReactFlowRecap from "./components/flow/ReactFlowRecap";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "80vh" }}>
        {/* <FlowDiagram /> */}
        <ReactFlowRecap />
      </div>
    </>
  );
}

export default App;
