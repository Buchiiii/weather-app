// import "./App.css";
import { useSelector } from "react-redux";
import { Search } from "./common/search";
import { SectionOne } from "./pages/SectionOne";
import { SectionTwo } from "./pages/SectionTwo";
import { RootState } from "./redux/store";
import { SectionThree } from "./pages/SectionThree";

function App() {
  const weather = useSelector((state: RootState) => {
    return state.weather;
  });
  return (
    <>
      <div className="w-full h-full flex flex-col ">
        <div className="h-[10%]">
          <Search />
        </div>

        {weather.data ? (
          <>
            <div className=" h-[90%] flex justify-center ">
              <div className="h-full lg:w-[930px] w-full px-2">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-[450px] flex justify-center content-center items-center">
              Please select a location
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
