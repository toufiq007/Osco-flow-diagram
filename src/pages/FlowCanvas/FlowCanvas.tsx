import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ReactFlowLayout from "../../components/layout";

const FlowCanvas = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <ReactFlowLayout />
      </div>
    </div>
  );
};

export default FlowCanvas;
