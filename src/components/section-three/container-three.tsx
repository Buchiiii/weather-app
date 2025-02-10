import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import dateConverter from "../../utils/dateConverter";
import { ICON } from "../../common/icons";

export const ContainerThree = () => {
  const weather = useSelector((state: RootState) => {
    return state.weather;
  });
  return (
    <>
      <div className="px-2 py-2 h-full">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col">
            <span className="text-[14px] mb-3 flex ">
              <div className="mt-1 me-1 ">
                <ICON type="wind" classname="h-[14px] " />
              </div>
              Wind
            </span>
            <span className="text-[32px]">{`${weather.data?.wind.deg}°`}</span>
          </div>
          <div className="text-[16px]">
            <span>{`Time now is ${dateConverter(weather.data?.dt)}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};
