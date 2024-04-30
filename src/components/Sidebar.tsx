import { flowData } from "../assets/flowdata/flowData";
import { IFlowData } from "../types/flowData";

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
  return (
    <div
      style={{
        width: "30%",
        height: "calc(100vh - 60px)",
      }}
      className=""
    >
      <div>
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
