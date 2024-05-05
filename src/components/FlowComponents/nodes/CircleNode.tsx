/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from "reactflow";

const CircleNode = ({ data }: any) => {
  console.log({ data }, "from circle component");
  return (
    <div style={{}}>
      <Handle
        type="target"
        position={Position.Top}
        id="decision_a"
        style={{
          background: "black",
          position: "relative",
          top: "22px",
          zIndex: "2",
          left: "56px",
          fontSize: "10px",
          padding: "3px",
        }}
      />

      <p
        className="bg-red-500"
        style={{
          position: "absolute",
          color: "black",
          zIndex: "2",
          fontSize: "16px",
          wordWrap: "normal",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "500",
          marginLeft: "10px",
          marginTop: "20px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      >
        {/* {data?.label} */}
        <span>circle</span>
      </p>
      <Handle
        type="source"
        position={Position.Right}
        id="decision_b"
        style={{
          background: "red",
          position: "relative",
          bottom: "-122px",
          zIndex: "2",
          left: "56px",
          fontSize: "10px",
          padding: "3px",
        }}
      />
    </div>
  );
};
export default CircleNode;
