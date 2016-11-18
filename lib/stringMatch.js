function stringMatch (str, predicate) {
  const parsedStr = str.toLowerCase()
  const parsedPredicate = predicate.toLowerCase().replace(/_/g, ' ')

  return fuzzyMatch(parsedStr, parsedPredicate)
};

function fuzzyMatch (str, pattern) {
  pattern = pattern.split('').reduce((a, b) => a + '[^' + b + ']*' + b)
  return (new RegExp(pattern)).test(str)
};

module.exports = stringMatch
