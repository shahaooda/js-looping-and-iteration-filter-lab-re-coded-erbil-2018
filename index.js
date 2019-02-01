
// Code your solution in this file
function findMatching (drivers, y) {
  return drivers.filter(function (x) {
    return x.toLowerCase() == y.toLowerCase();
  });
}
function fuzzyMatch (arr, partofName) {
  let fullName = partofName.length;
  return arr.filter(function (x) {
    return x.slice(0, fullName) === partofName;
  });
}
function matchName (drivers, y) {
  return drivers.filter(function (x) {
    return x.name.toLowerCase() == y.toLowerCase();
  });
}
