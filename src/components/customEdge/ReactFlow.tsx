import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  OnNodesChange,
  OnEdgesChange,
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  OnConnect,
  addEdge,
} from "reactflow";

import CustomTextUpdater from "./CustomTextUpdater";
import CustomEdge from "./CustomEdge";
import { useCallback, useState } from "react";
import "reactflow/dist/style.css";

const bgColor = { background: "#282c34" };
const nodeType = { textUpdateNode: CustomTextUpdater };

const initialNodes: Node[] = [
  {
    id: "1",
    type: "textUpdateNode",
    data: { value: "node 1" },
    position: { x: 658, y: 358 },
  },

  {
    id: "2",
    type: "textUpdateNode",
    data: { value: "node 2" },
    position: { x: 444, y: 118 },
  },
  {
    id: "3",
    type: "textUpdateNode",
    data: { value: "node 3" },
    position: { x: 232, y: 366 },
  },
];
const initialEdges: Edge[] = [
  {
    id: "2-1",
    type: "custom-edge",
    source: "2",
    target: "1",
  },
  {
    id: "2-3",
    type: "custom-edge",
    source: "2",
    target: "3",
  },
];

const edgeType = { "custom-edge": CustomEdge };

const CustomReactFlow = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  console.log({ nodes, edges });

  const onNodeChanges: OnNodesChange = useCallback((params) => {
    setNodes((nds) => applyNodeChanges(params, nds));
  }, []);

  const onEdgeChanges: OnEdgesChange = useCallback((params) => {
    setEdges((nds) => applyEdgeChanges(params, nds));
  }, []);

  const onConnect: OnConnect = useCallback(
    (params) => {
      const edge = { ...params, type: "custom-edge" };
      setEdges((nds) => addEdge(edge, nds));
    },
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "97vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeType}
        edgeTypes={edgeType}
        onNodesChange={onNodeChanges}
        onEdgesChange={onEdgeChanges}
        onConnect={onConnect}
        style={bgColor}
      >
        <Background />
        <Controls />
        <MiniMap nodeStrokeWidth={3} />
      </ReactFlow>
    </div>
  );
};

export default CustomReactFlow;
