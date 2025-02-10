import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import dateConverter from "../../utils/dateConverter";
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
            <span className="text-[16px] mb-3 mt-2 flex"><div className="me-2 mt-1"><ICON type="sunriseNoColor" classname="h-[15px]"/></div>Sunrise</span>
            <span className="text-[32px]">
              {dateConverter(weather.data?.sys.sunrise)}
            </span>
          </div>
          <div className="text-[16px]">
            <span>{`Sunset ${dateConverter(weather.data?.sys.sunset)}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};
