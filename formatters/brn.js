module.exports = value => {
  if (value !== 0 && !value) return
  const str = (value + "").replace(/[^0-9]/g, "");

  const numberCounts = [3, 2, 5]

  let idx = 0
  return numberCounts.map(function (n) {
    const result = str.substr(idx, n);
    idx = idx + n;
    return result
  }).join('-')
}