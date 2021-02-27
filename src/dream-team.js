module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let str = members.filter((el) => (typeof el === "string" ? el : false));
    let result = str
      .sort()
      .toString()
      .toUpperCase()
      .replace(/[\s ]/g, "")
      .split(",")
      .sort()
      .map(function (el) {
        return el.slice(0, 1);
      })
      .toString();
    let dreamTeam = result.replace(/[\s,]/g, "");
    return dreamTeam === "" ? false : dreamTeam;
  } else {
    return false;
  }
};
