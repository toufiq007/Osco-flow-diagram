import { useState } from "react";
import { flowData } from "../assets/flowdata/flowData";
import { IFlowData } from "../types/flowData";
import FlowFilter from "./FlowComponents/FlowFilter";

type onDragProps = {
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    text?: string,
    nodeType?: string,
    color?: string
  ) => void;
};
const Sidebar = () => {
  const onDragStart: onDragProps["onDragStart"] = (
    e,
    text,
    nodeType,
    color
  ) => {
    e.dataTransfer.setData("application/reactflow", nodeType as string);
    e.dataTransfer.setData("application/reactflow", color as string);
    e.dataTransfer.setData("application/reactflow", text as string);
    e.dataTransfer.effectAllowed = "move";
  };

  const [items, setItems] = useState(flowData);

  return (
    <div
      style={{
        width: "30%",
        height: "calc(100vh - 60px)",
      }}
    >
      <h2 className="text-center text-2xl py-4 ">Click to filter your nodes</h2>
      <FlowFilter items={items} setItems={setItems} />
      <div className="my-4">
        <hr />
        <h2 className="text-center text-2xl py-4">Drag your node</h2>
        {flowData.map((data: IFlowData, index: number) => {
          return (
            <div
              key={index}
              className={data.style}
              draggable
              onDragStart={(e) =>
                onDragStart(e, data.type, data.text, data.color)
              }
            >
              <div className="text-center">{data.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
