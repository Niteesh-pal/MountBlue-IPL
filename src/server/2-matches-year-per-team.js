function matchesYearPerTeam(matchData) {
  const matchesPerYearData = matchData.reduce((acc, cur) => {
    if (!acc[cur['season']]) {
      acc[cur['season']] = {};
    }
    if (!acc[cur['season']][cur['winner']]) {
      acc[cur['season']][cur['winner']] = 0;
    }

    acc[cur['season']][cur['winner']]++;

    return acc;
  }, {});

  return matchesPerYearData;
}

module.exports.matchesYearPerTeam = matchesYearPerTeam;
