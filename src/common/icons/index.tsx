import sun from "../../assets/sun.png";
import cloudyDay from "../../assets/cloudy day.png";
import cloudyNight from "../../assets/cloudy night.png";
import rain from "../../assets/rain.png";
import humidity from "../../assets/humidity.png";
import wind from "../../assets/wind.png";
import sunriseColour from "../../assets/sunrise colour.png";
import sunriseNoColour from "../../assets/sunrise no colour.png";
import location from "../../assets/location.png";
// import thunder from "../../assets/Thunder.png";
import rainfall from "../../assets/rainfall.png";
import sunset from "../../assets/sunset.png";
import search from "../../assets/search.png";

interface IIconProps {
  type: string;
  classname: string;
}

export const ICON = ({ type, classname }: IIconProps) => {
  switch (type) {
    case "sun":
      return <img src={sun} className={classname} />;
    case "rain":
      return <img src={rain} className={classname} />;
    case "cloudy day":
      return <img src={cloudyDay} className={classname} />;
    case "cloudy night":
      return <img src={cloudyNight} className={classname} />;
    case "humidity":
      return <img src={humidity} className={classname} />;
    case "location":
      return <img src={location} className={classname} />;
    case "sunriseColor":
      return <img src={sunriseColour} className={classname} />;
    case "sunriseNoColor":
      return <img src={sunriseNoColour} className={classname} />;
    case "sunset":
      return <img src={sunset} className={classname} />;
    case "wind":
      return <img src={wind} className={classname} />;
    case "rainfall":
      return <img src={rainfall} className={classname} />;
    case "search":
      return <img src={search} className={classname} />;
  }
};
