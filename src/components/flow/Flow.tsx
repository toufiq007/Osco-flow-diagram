import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
const nodes = [
  {
    id: "1",
    position: { x: 50, y: 350 },
    data: { label: "Node 1" },
  },
];
const FlowDiagram = () => {
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <ReactFlow nodes={nodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
