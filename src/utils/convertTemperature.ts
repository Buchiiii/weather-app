const convertTemperature = (temp: number, unit: string) => {
  switch (unit) {
    case "Celsius":
      return (temp - 273.15).toFixed(2).toString() + "°C";

    case "Fahrenheit":
      return (((temp - 273.15) * 9) / 5 + 32).toFixed(2).toString() + "°F";
  }
};

export default convertTemperature;
