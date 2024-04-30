import { IFlowData } from "../../types/flowData";

export const flowData: IFlowData[] = [
  {
    style: "bg-blue-400  my-2 py-3 mx-2 rounded-md cursor-grab shadow-lg",
    type: "customInput",
    text: "INPUT_1",
    color: "#42a5f5",
    title: "Drag this INPUT_1",
  },
  {
    style: "bg-blue-200  my-2 py-3 mx-2 rounded-md cursor-grab shadow-lg",
    type: "decision",
    text: "Decision",
    color: "#d5f692",
    title: "Drag this Decision",
  },
  {
    style: "bg-teal-200  my-2 py-3 mx-2 rounded-md cursor-grab shadow-lg",
    type: "customFunction",
    text: "NODE_EXEC_1",
    color: "#80cbc4",
    title: "Drag this NODE_EXEC_1",
  },
  {
    style: "bg-blue-200 my-2 py-3 mx-2 rounded-md cursor-grab shadow-lg",
    type: "circleType",
    text: "CIRCLE",
    color: "coral",
    title: "Drag this INPUT_2",
  },
  {
    style: "bg-indigo-300  my-2 py-3 mx-2 rounded-md cursor-grab shadow-lg",
    type: "customOutput",
    text: "OUTPUT_1",
    color: "#7986cb",
    title: "Drag this OUTPUT_1",
  },
];
