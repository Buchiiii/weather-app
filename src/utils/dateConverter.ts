const dateConverter = (date: string) => {
  var realDate = new Date(parseInt(date) * 1000);
  var string = realDate.toISOString();

  var time = string.split("T")[1].split(".")[0];
  var hours = time.split(":")[0];
  var minutes = time.split(":")[1];

  console.log("Time", hours);
  console.log("Time", minutes);

  if (parseInt(hours) >= 12) {
    return `${hours}: ${minutes} PM`;
  } else {
    return `${hours}: ${minutes} AM`;
  }
};

export default dateConverter;
