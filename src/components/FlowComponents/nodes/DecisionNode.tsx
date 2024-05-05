/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from "reactflow";

const decisionStyle = {
  background: "#d5f692",
  minWidth: "82.81px",
  minHeight: "82.81px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  transform: "rotate(45deg)",
};

const DecisionNode = ({ data }:any) => {
    console.log(data)
  return (
    <div className="decisionNode" style={decisionStyle}>
      <Handle
        type="target"
        position={Position.Top}
        id="decision_a"
        style={{
          background: "#295b88",
          position: "relative",
          top: "80px",
          zIndex: "2",
          left: "-3px",
          fontSize: "10px",
          padding: "3px",
        }}
      />

      <p
        style={{
          position: "absolute",
          color: "black",
          zIndex: "2",
          fontSize: "16px",
          wordWrap: "normal",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "rotate(-45deg)",
          textAlign: "center",
          fontWeight: "500",
          //   whiteSpace: "nowrap",
          marginLeft: "10px",
          marginTop: "20px",
          // width: "80px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {/* {data.label} */}
        <span>dicison</span>
      </p>
      <Handle
        type="source"
        position={Position.Right}
        id="decision_b"
        style={{
          zIndex: "2",
          top: 0,
          right: 0,
          background: "#101921",
          padding: "3px",
          transform: "rotate(-45deg)",
          content: "data",
        }}
      />
    </div>
  );
};
export default DecisionNode;
