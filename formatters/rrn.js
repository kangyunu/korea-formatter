module.exports = value => {
  const str = (value + "").replace(/ /gi, "");

  const numberCounts = [6, 7]

  let idx = 0
  return numberCounts.map(n => {
    const result = str.substr(idx, n);
    idx = idx + n;
    return result
  }).join('-')
}