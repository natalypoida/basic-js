module.exports = function getSeason(date) {
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    if (date !== undefined) {
      throw new Error();
    }
  }
  if (date instanceof Date && date.valueOf() !== "") {
    month = date.getMonth();
    switch (month) {
      case 0:
      case 1:
      case 11: {
        return "winter";
      }
      case 2:
      case 3:
      case 4: {
        return "spring";
      }
      case 5:
      case 6:
      case 7: {
        return "summer";
      }
      case 8:
      case 9:
      case 10: {
        return "autumn";
      }
    }
  } else return "Unable to determine the time of year!";
  // remove line with error and write your code here
};
