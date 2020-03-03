"use strict";

module.exports = function (value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    unit: true
  };
  var str = (value + "").replace(/[^0-9-]/g, "");
  return "".concat(new Intl.NumberFormat('ko-KR').format(str)).concat(options.unit ? "원" : "");
};