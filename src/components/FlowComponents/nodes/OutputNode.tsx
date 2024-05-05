import { Handle, Position } from "reactflow";

const OutputNode = () => {
  return (
    <div>
      <Handle type="target" position={Position.Top} id="a" />
      <div
        style={{
          background: "lightblue",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          borderRadius: "20px",
        }}
      >
        <span>simple output node</span>
      </div>
      <Handle type="source" position={Position.Bottom} id="c" />
    </div>
  );
};

export default OutputNode;
