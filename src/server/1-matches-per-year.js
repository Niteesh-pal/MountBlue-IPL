function numberOfMatches(matches) {
  let obj = {};
  for (let i = 0; i < matches.length; i++) {
    if (!obj[matches[i].season]) {
      obj[matches[i].season] = 0;
    }

    obj[matches[i].season]++;
  }
  return obj;
}

module.exports.numberOfMatches = numberOfMatches;
