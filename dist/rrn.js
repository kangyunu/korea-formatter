"use strict";

module.exports = function (value) {
  var str = (value + "").replace(/[^0-9]/g, "");
  var numberCounts = [6, 7];
  var idx = 0;
  return numberCounts.map(function (n) {
    var result = str.substr(idx, n);
    idx = idx + n;
    return result;
  }).join('-');
};