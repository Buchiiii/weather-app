import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ICON } from "../../common/icons";

export const ContainerTwo = () => {
  const weather = useSelector((state: RootState) => {
    return state.weather;
  });
  return (
    <>
      <div className="px-2 py-2 h-full">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col">
            <span className="text-[14px] mb-3 flex">
              <div className="mt-1 me-1">
                <ICON type="humidity" classname="h-[14px] " />
              </div>
              Humidity
            </span>
            <span className="text-[32px]">
              {`${weather.data?.main.humidity}%`}
            </span>
          </div>
          <div className="text-[16px]">
            <span>{`The dew point is 6 right now`}</span>
          </div>
        </div>
      </div>
    </>
  );
};
