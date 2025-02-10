import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ICON } from "../../common/icons";

export const ContainerOne = () => {
  const weather = useSelector((state: RootState) => {
    return state.weather;
  });
  console.log(weather);
  return (
    <>
      <div className="flex flex-col px-3 h-full md:py-3">
        <div className="border-b h-[12%] mt-2">
          <span>5 DAY FORECAST</span>
        </div>
        <div className=" flex justify-between flex-col h-[90%] mb-2">
          <div className="flex justify-between mt-3 md:h-[20.4px]">
            <div className="h-[20px] w-[10%]">
              <span>Today</span>
            </div>
            <div>
              <span>
                <ICON type="sun" classname="w-[20px]" />
              </span>
            </div>
            <div className="w-[50%]  h-[20px] flex items-center justify-between pe-2">
              <div>
                <span>7</span>
              </div>
              <div className="h-[4px] w-[130px] bg-blue-200 rounded-[50px] bg-gradient-to-r from-[#B7FF7E] via-[#FFE458] to-[#FFE458]"></div>
              <div>
                <span>17</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between md:h-[20.4px]">
            <div className="h-[20px] w-[10%]">
              <span>Mon</span>
            </div>
            <div>
              <span>
                <ICON type="rain" classname="w-[20px]" />
              </span>
            </div>
            <div className="w-[50%]  h-[20px] flex items-center justify-between pe-2">
              <div>
                <span>7</span>
              </div>
              <div className="h-[4px] w-[130px] rounded-[50px] bg-gradient-to-r from-[#B7FF7E] via-[#FFE458] to-[#FFE458]"></div>
              <div>
                <span>17</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between md:h-[20.4px]">
            <div className="h-[20px] w-[10%]">
              <span>Tue</span>
            </div>
            <div>
              <span>
                <ICON type="cloudy day" classname="w-[20px]" />
              </span>
            </div>
            <div className="w-[50%]  h-[20px] flex items-center justify-between pe-2">
              <div>
                <span>7</span>
              </div>
              <div className="h-[4px] w-[130px] rounded-[50px] bg-gradient-to-r from-[#B7FF7E] via-[#FFE458] to-[#FFE458]"></div>
              <div>
                <span>17</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between  md:h-[20.4px]">
            <div className="h-[20px] w-[10%]">
              <span>Wed</span>
            </div>
            <div>
              <span>
                <ICON type="sun" classname="w-[20px]" />
              </span>
            </div>
            <div className="w-[50%]  h-[20px] flex items-center justify-between pe-2">
              <div>
                <span>7</span>
              </div>
              <div className="h-[4px] w-[130px] rounded-[50px] bg-gradient-to-r from-[#B7FF7E] via-[#FFE458] to-[#FFE458]"></div>
              <div>
                <span>17</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between md:h-[20.4px]">
            <div className="h-[20px] w-[10%]">
              <span>Thur</span>
            </div>
            <div>
              <span>
                <ICON type="sun" classname="w-[20px]" />
              </span>
            </div>
            <div className="w-[50%]  h-[20px] flex items-center justify-between pe-2">
              <div>
                <span>7</span>
              </div>
              <div className="h-[4px] w-[130px] bg-blue-200 rounded-[50px] bg-gradient-to-r from-[#B7FF7E] via-[#FFE458] to-[#FFE458]"></div>
              <div>
                <span>17</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
