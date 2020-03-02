module.exports = function (value, options = { unit: true }) {
  const str = (value + "").replace(/[^0-9-]/g, "");
  return `${new Intl.NumberFormat('ko-KR').format(str)}${options.unit ? "원" : ""}`
}