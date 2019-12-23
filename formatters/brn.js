module.exports = value => {
  const str = (value + "").replace(/ /gi, "");

  const numberCounts = [3, 2, 5]

  let idx = 0
  return numberCounts.map(n => {
    const result = str.substr(idx, n);
    idx = idx + n;
    return result
  }).join('-')
}