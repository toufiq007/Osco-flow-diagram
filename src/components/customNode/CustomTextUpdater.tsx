import { useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

const CustomTextUpdater = () => {
  // const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
  //   console.log(evt.target.value);
  // }, []);
  const [changes, setChanges] = useState("");
  const handleChanges = (changes: string) => {
    console.log(changes);
  };
  return (
    <div>
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="target" position={Position.Top} id="b" style={handleStyle} />
      <div
        style={{
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          name="text"
          onChange={(e) => setChanges(e.target.value)}
          className="nodrag"
        />
        <button
          style={{
            marginTop: ".5rem",
            padding: "4px 8px",
            background: "#B8CEFF",
            color: "#000",
            cursor: "pointer",
          }}
          onClick={() => handleChanges(changes)}
        >
          Create node
        </button>
      </div>
      <Handle type="source" position={Position.Bottom} id="c" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="d"
        style={handleStyle}
      />
    </div>
  );
};

export default CustomTextUpdater;
