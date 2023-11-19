function getExtraRunsPerTeam2016(matchData, deliveryData) {
  const matchId = matchData.reduce((acc, cur) => {
    if (cur['season'] === '2016') {
      if (!acc.hasOwnProperty(cur['id'])) {
        acc[cur['id']] = cur['id'];
      }
    }

    return acc;
  }, {});
  // console.log(matchId);

  const extraRunsPerTeamData = deliveryData.reduce((acc, curr) => {
    if (matchId[curr['match_id']] === curr['match_id']) {
      if (acc.hasOwnProperty(curr['bowling_team'])) {
        acc[curr['bowling_team']] += Number(curr['extra_runs']);
      } else {
        acc[curr['bowling_team']] = 0;
      }
    }

    return acc;
  }, {});

  return extraRunsPerTeamData;
}

module.exports.getExtraRunsPerTeam2016 = getExtraRunsPerTeam2016;
