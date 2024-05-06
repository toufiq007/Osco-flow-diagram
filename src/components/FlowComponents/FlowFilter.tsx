import { IFlowData } from "../../types/flowData";

type IFlowFilterProps = {
  items: IFlowData[];
  setFilterArray: (items: IFlowData[]) => void;
  handleFilter: (id: string) => void;
};

const FlowFilter = ({
  items,
  setFilterArray,
  handleFilter,
}: IFlowFilterProps) => {
  return (
    <div>
      {items.length > 1 &&
        items.map((item: IFlowData, index) => {
          return (
            <div key={index} className="text-center w-60 mx-auto">
              <button
                onClick={() => handleFilter(item.id)}
                className="bg-blue-500 my-1 px-4 py-2 w-[150px] font-bold text-white rounded-lg hover:bg-blue-300"
              >
                {item.text}
              </button>
            </div>
          );
        })}
      <div className="text-center w-60 mx-auto">
        <button
          onClick={() => setFilterArray(items)}
          className="bg-black font-bold text-white my-1 px-4 py-2 w-[150px] rounded-lg hover:bg-blue-300"
        >
          All
        </button>
      </div>
    </div>
  );
};

export default FlowFilter;
