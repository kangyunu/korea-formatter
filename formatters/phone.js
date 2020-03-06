module.exports = value => {
  if (value !== 0 && !value) return
  const str = (value + "").replace(/[^0-9]/g, "");

  const isSeoul = str.substr(0, 2) === "02"

  const numberCounts = isSeoul ? [2, 4, 4] : [3, 4, 4]

  let idx = 0
  return numberCounts.map(function (n) {
    const result = str.substr(idx, n);
    idx = idx + n;
    return result
  }).join('-')
}