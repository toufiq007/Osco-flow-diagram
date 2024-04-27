import "./App.css";
import CustomReactFlow from "./components/customNode/ReactFlow";
// import FlowDiagram from "./components/flow/Flow";
// import ReactFlowRecap from "./components/flow/ReactFlowRecap";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "80vh" }}>
        {/* <FlowDiagram /> */}
        {/* <ReactFlowRecap /> */}
        <CustomReactFlow />
      </div>
    </>
  );
}

export default App;
