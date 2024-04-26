import { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Node,
  applyNodeChanges,
  OnNodesChange,
  Edge,
  applyEdgeChanges,
  OnEdgesChange,
  OnConnect,
  addEdge,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 300, y: 500 },
    data: { label: "node 1" },
  },

  {
    id: "2",
    position: { x: 500, y: 300 },
    data: { label: "node 2" },
  },
  {
    id: "3",
    position: { x: 600, y: 200 },
    data: { label: "node 3" },
  },

  {
    id: "4",
    position: { x: 700, y: 100 },
    data: { label: "node 4" },
  },
  {
    id: "5",
    position: { x: 800, y: 800 },
    data: { label: "node 5" },
  },
];

const initialEdges: Edge[] = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "smoothstep" },
  {
    id: "2-3",
    source: "2",
    target: "3",
    label: "to the",
    type: "bezier",
  },
];
const ReactFlowRecap = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const onNodeChange: OnNodesChange = useCallback((change) => {
    setNodes((nds) => applyNodeChanges(change, nds));
  }, []);
  const onEdgeChange: OnEdgesChange = useCallback((change) => {
    setEdges((nds) => applyEdgeChanges(change, nds));
  }, []);

  const onConnect: OnConnect = useCallback((change) => {
    setEdges((eds) => addEdge(change, eds));
  }, []);

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgeChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
        <MiniMap nodeStrokeWidth={3} nodeStrokeColor={"blue"} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowRecap;
