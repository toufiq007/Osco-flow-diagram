import ReactFlow, { Background, Controls } from "reactflow";
import { Node, Edge } from "reactflow";
import "reactflow/dist/style.css";
// creating node
const nodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "node 1" },
  },
  {
    id: "2",
    position: { x: 500, y: 100 },
    data: { label: "node 2" },
  },

  {
    id: "3",
    position: { x: 300, y: 600 },
    data: { label: "node 3" },
  },
  {
    id: "4",
    position: { x: 700, y: 300 },
    data: { label: "node 4" },
  },
];
// adding edge
const edges: Edge[] = [
  { id: "1-2", source: "1", target: "2", animated: true },
  { id: "2-3", source: "2", target: "3", animated: true },
  { id: "3-4", source: "3", target: "4", animated: true },
];

// our main diagram
const FlowDiagram = () => {
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
