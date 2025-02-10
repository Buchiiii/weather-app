import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import convertTemperature from "../../utils/convertTemperature";
import { ICON } from "../../common/icons";

export const ContainerOne = () => {
  const weather = useSelector((state: RootState) => {
    return state.weather;
  });
  const tempType = useSelector((state: RootState) => {
    return state.temp.type;
  });
  var icon = weather.data?.weather[0].icon;
  console.log(weather);
  return (
    <>
      <div className="flex flex-col px-3 md:py-3">
        <div className="flex w-full justify-end mt-1 text-[16px]">
          <div className="me-2 mt-1">
            <ICON type="location" classname="w-[12px] h-[16px]" />
          </div>
          <span>{`${weather.data?.name}, ${weather.data?.sys.country}`}</span>
        </div>
        <div className="lg:mt-5">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
          />
        </div>
        <div className="">
          <span className="mt-2 text-[50px]">
            {tempType === "celsius"
              ? convertTemperature(weather.data?.main.temp, "Celsius")
              : convertTemperature(weather.data?.main.temp, "Fahrenheit")}
          </span>
        </div>
        <div className="flex">
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png `}
              alt=""
              className="w-[21px] h-[22px]"
            />
          </div>
          <span className="text-[16px]">{weather.data?.weather[0].main}</span>
        </div>
      </div>
    </>
  );
};
