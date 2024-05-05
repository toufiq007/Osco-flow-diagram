import { useState } from "react";
import { Handle, Position } from "reactflow";
import { RemoveCircle } from "@mui/icons-material";

const InputNode = () => {
  const [changes, setChanges] = useState("");
  console.log(changes);

  // create dynamic input
  const initialInput = [{ id: 1, value: "" }];
  const [inputs, setInputs] = useState(initialInput);
  const addNewInput = () => {
    setInputs([...inputs, { id: inputs.length + 1, value: "" }]);
  };
  const removeInput = (id: number) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };
  return (
    <div>
      <Handle type="target" position={Position.Top} id="a" />
      <div
        style={{
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          borderRadius: "20px",
        }}
      >
        <label htmlFor="text">Text:</label>
        {inputs.length > 0 &&
          inputs.map((input) => {
            return (
              <div key={input.id} style={{ marginTop: "10px" }}>
                <input
                  id="text"
                  name="text"
                  onChange={(e) => setChanges(e.target.value)}
                  className="nodrag"
                  style={{ border: "1px solid #000", marginRight: "5px" }}
                />
                <button onClick={() => removeInput(input.id)}>
                  <RemoveCircle />
                </button>
              </div>
            );
          })}
        <button
          style={{
            marginTop: ".5rem",
            padding: "4px 8px",
            background: "#B8CEFF",
            color: "#000",
            cursor: "pointer",
          }}
          onClick={addNewInput}
        >
          Create new input
        </button>
      </div>
      <Handle type="source" position={Position.Bottom} id="c" />
    </div>
  );
};

export default InputNode;
