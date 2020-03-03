module.exports = function (value, options) {
  const o = options ? options : { unit: true }
  const str = (value + "").replace(/[^0-9-]/g, "");
  return `${new Intl.NumberFormat('ko-KR').format(str)}${o.unit ? "원" : ""}`
}