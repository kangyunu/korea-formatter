module.exports = value => {
  const str = (value + "").replace(/[^0-9]/g, "");

  return new Intl.NumberFormat('ko-KR').format(str) + "원"
}