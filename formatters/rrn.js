module.exports = value => {
  const str = (value + "").replace(/[^0-9]/g, "");

  const numberCounts = [6, 7]

  let idx = 0
  return numberCounts.map(function (n) {
    const result = str.substr(idx, n);
    idx = idx + n;
    return result
  }).join('-')
}