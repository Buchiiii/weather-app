import { ICON } from "../../common/icons";

export const ContainerThree = () => {
  return (
    <>
      <div className="px-2 py-2 h-full">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col">
            <span className="text-[14px] mb-2 mt-2 flex">
              <div className="me-2 mt-1">
                <ICON type="rainfall" classname="h-[14px]" />
              </div>
              Rainfall
            </span>
            <span className="text-[32px]">0 mm</span>
            <span className="text-[12px]">in the last 24h</span>
          </div>
          <div>
            <span className="text-[16px]">
              Next expected is 1.2mm on Friday
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
