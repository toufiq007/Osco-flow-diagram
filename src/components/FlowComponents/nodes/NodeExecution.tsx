import { Handle,Position } from "reactflow";

const NodeExecution = () => {
    return (
        <div>
      <Handle type="target" position={Position.Top} id="a" />
      <div
        style={{
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <span>Node execution++</span>
      </div>
      <Handle type="source" position={Position.Bottom} id="c" />
    </div>
    );
};

export default NodeExecution;