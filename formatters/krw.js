module.exports = (value, options = { unit: true }) => {
  if (value !== 0 && !value) return
  const str = (value + "").replace(/[^0-9-]/g, "");
  return `${new Intl.NumberFormat('ko-KR').format(str)}${options.unit ? "원" : ""}`
}