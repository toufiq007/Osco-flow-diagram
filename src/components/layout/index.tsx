import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  // OnNodesChange,
  // OnEdgesChange,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Node,
  Edge,
  // applyNodeChanges,
  // applyEdgeChanges,
  OnConnect,
  addEdge,
  ReactFlowInstance,
  XYPosition,
} from "reactflow";

import CustomTextUpdater from "../FlowComponents/customEdge/CustomTextUpdater";
import CustomEdge from "../FlowComponents/customEdge/CustomEdge";
import { useCallback, useRef, useState } from "react";
import "reactflow/dist/style.css";

import InputNode from "../FlowComponents/nodes/InputNode";
import DecisionNode from "../FlowComponents/nodes/DecisionNode";
import NodeExecution from "../FlowComponents/nodes/NodeExecution";
import OutputNode from "../FlowComponents/nodes/OutputNode";
import CircleNode from "../FlowComponents/nodes/CircleNode";

const bgColor = { background: "#282c34" };
const nodeType = {
  textUpdateNode: CustomTextUpdater,
  circleNode: CircleNode,
  customInputNode: InputNode,
  customDecisionNode: DecisionNode,
  customFunctionNode: NodeExecution,
  customOutputNode: OutputNode,
};

const initialNodes: Node[] = [
  // {
  //   id: "1",
  //   type: "textUpdateNode",
  //   data: { value: "node 1" },
  //   position: { x: 658, y: 358 },
  // },
  // {
  //   id: "2",
  //   type: "textUpdateNode",
  //   data: { value: "node 2" },
  //   position: { x: 444, y: 118 },
  // },
  // {
  //   id: "3",
  //   type: "textUpdateNode",
  //   data: { value: "node 3" },
  //   position: { x: 232, y: 366 },
  // },
  // {
  //   id: "4",
  //   type: "circleNode",
  //   data: { label: "circle" },
  //   position: { x: 250, y: 5 },
  // },
];
const initialEdges: Edge[] = [
  // {
  //   id: "2-1",
  //   type: "custom-edge",
  //   source: "2",
  //   target: "1",
  //   animated: true,
  // },
  // {
  //   id: "2-3",
  //   type: "custom-edge",
  //   source: "2",
  //   target: "3",
  //   animated: true,
  // },
];
// set our default edge options
const edgeOptions = {
  animated: true,
};

// setup our edge Type
const edgeType = { "custom-edge": CustomEdge };

// for creating new node with id
let id = 0;
const getId = () => `dndnode_${id++}`;

const ReactFlowLayout = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  const onConnect: OnConnect = useCallback(
    (params) => {
      const edge = { ...params, type: "custom-edge" };
      setEdges((nds) => addEdge(edge, nds));
    },
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      console.log({ type }, "node type");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }
      const position = reactFlowInstance?.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const defaultPosition: XYPosition = { x: 0, y: 0 };
      const newNode: Node = {
        id: getId(),
        type,
        position: position ?? defaultPosition,
        data: { label: `${type} node` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div
      className="flex"
      style={{ width: "100%", height: "100vh", background: "#ededed" }}
    >
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{ width: "100%", height: "calc(100vh - 50px)" }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeType}
            edgeTypes={edgeType}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            style={bgColor}
            defaultEdgeOptions={edgeOptions}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap nodeStrokeWidth={3} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default ReactFlowLayout;
