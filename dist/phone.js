"use strict";

module.exports = function (value) {
  var str = (value + "").replace(/[^0-9]/g, "");
  var isSeoul = str.substr(0, 2) === "02";
  var numberCounts = isSeoul ? [2, 4, 4] : [3, 4, 4];
  var idx = 0;
  return numberCounts.map(function (n) {
    var result = str.substr(idx, n);
    idx = idx + n;
    return result;
  }).join('-');
};