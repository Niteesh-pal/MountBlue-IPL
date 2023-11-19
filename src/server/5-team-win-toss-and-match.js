/* eslint-disable no-prototype-builtins */
function teamWonTossAndMatch(matchData) {
  const teamWinsTossAndMatch = matchData.reduce((acc, teamData) => {
    if (teamData['toss_winner'] === teamData['winner']) {
      if (acc.hasOwnProperty(teamData['winner'])) {
        acc[teamData['toss_winner']]++;
      } else {
        acc[teamData['toss_winner']] = 1;
      }
    }

    return acc;
  }, {});

  return teamWinsTossAndMatch;
}

module.exports.teamWonTossAndMatch = teamWonTossAndMatch;
