import { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  OnEdgesChange,
  OnNodesChange,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  OnConnect,
} from "reactflow";
import { Node, Edge } from "reactflow";
import "reactflow/dist/style.css";
// creating node
const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 400 },
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
// const initialEdes: Edge[] = [
//   { id: "1-2", source: "1", target: "2", animated: true },
//   { id: "2-3", source: "2", target: "3", animated: true },
//   { id: "3-4", source: "3", target: "4", animated: true, label: "to the" },
// ];
const initialEdes: Edge[] = [];

// our main diagram
const FlowDiagram = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdes);

  // handle node changes
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  // handle edge changes
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // adding new edge
  // const onConnect: OnConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   []
  // );

  const onConnect: OnConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
