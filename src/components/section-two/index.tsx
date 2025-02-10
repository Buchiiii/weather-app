import { ICON } from "../../common/icons";

export const SectionTwoComponent = () => {
  const data = [
    { time: "Now", image: "cloudy night", temperature: "13°" },
    { time: "5:59 AM", image: "sunriseColor", temperature: "Sunrise" },
    { time: "6 AM", image: "cloudy night", temperature: "12°" },
    { time: "7 AM", image: "cloudy night", temperature: "13°" },
    { time: "8 AM", image: "sun", temperature: "13°" },
    { time: "9 AM", image: "sun", temperature: "13°" },
    { time: "10 AM", image: "cloudy day", temperature: "13°" },
    { time: "11 AM", image: "cloudy day", temperature: "13°" },
    { time: "12 PM", image: "sun", temperature: "13°" },
    { time: "1 PM", image: "sun", temperature: "13°" },
    { time: "2 PM", image: "sun", temperature: "13°" },
    { time: "3 PM", image: "sun", temperature: "13°" },
    { time: "4 PM", image: "sun", temperature: "13°" },
    { time: "5 PM", image: "cloudy night", temperature: "14°" },
    { time: "5: 59 PM", image: "sunset", temperature: "Sunset" },
  ];
  return (
    <>
      <div className="border-b px-3 flex">
        <span>CONDITION THROUGHOUT THE DAY</span>
      </div>
      <div className="pt-3 flex h-[150px] flex-non-wrap overflow-x-auto whitespace-nowrap no-scrollbar">
        {data.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className=" h-[86px] w-[65px] flex-none justify-between "
              >
                <div className="flex flex-col w-full h-full justify-between ">
                  <div className="flex justify-center">
                    <span>{item.time}</span>
                  </div>
                  <div className="flex justify-center">
                    <ICON type={item.image} classname="w-[30px]" />
                  </div>
                  <div className="flex justify-center">
                    <span>{item.temperature}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
