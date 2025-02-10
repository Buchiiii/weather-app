import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeather } from "../../redux/slices/weather";
import { ICON } from "../icons";
import { RootState } from "../../redux/store";
import { setTemp } from "../../redux/slices/temp";

export const Search = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const tempType = useSelector((state: RootState) => state.temp.type);
  const unit = tempType === "celcius" ? "metric" : "imperial";
  var apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const toggleUnit = () => {
    console.log(tempType);
    dispatch(setTemp(tempType === "celsius" ? "fahrenheit" : "celsius"));
    console.log(tempType);
  };

  const searchLocation = async () => {
    const data = await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`
      )
      .then((response) => ({
        lat: response.data[0].lat,
        long: response.data[0].lon,
        country: response.data[0].country,
      }));
    return data;
  };

  const searchWeather = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      var location = await searchLocation();
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${apiKey}`;
      axios.get(weatherUrl).then((response) => {
        dispatch(setWeather(response.data));
      });
    }
  };

  return (
    <>
      <div className="w-full h-[2.5rem] justify-between  flex mt-2 px-2">
        <div className="flex items-center mt-2 md:mt-0">
          <span className="text-white text-sm mr-2">°C</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={tempType === "fahrenheit"}
              onChange={toggleUnit}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <span className="text-white text-sm ml-2">°F</span>
        </div>

        <div className="w-[200px] md:w-[300px] h-[2.5rem] border-[1px] border-white rounded-[0.5rem] flex flex-row">
          <div className="flex items-center w-[20px] ms-3 h-full">
            <ICON type="search" classname="h-[12px] w-[12px]" />
          </div>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={searchWeather}
            className="focus:outline-none focus:ring-0 focus:border-transparent w-full bg-transparent px-2"
            placeholder="Search for location"
          />
        </div>
      </div>
    </>
  );
};
