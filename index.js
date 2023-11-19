const csvtojson = require('csvtojson');
const fs = require('fs');

const { numberOfMatches } = require('./src/server/1-matches-per-year.js');
const {
  matchesYearPerTeam,
} = require('./src/server/2-matches-year-per-team.js');
const {
  getExtraRunsPerTeam2016,
} = require('./src/server/3-extra-run-per-team-2016.js');
const {
  top10EconomicBowler,
} = require('./src/server/4-top-10-economical-Bowler-2015.js');
const {
  teamWonTossAndMatch,
} = require('./src/server/5-team-win-toss-and-match.js');

const {
  playerOftheMatchPerYear,
} = require('./src/server/6-player-of-the-match-each-season.js');

const { strikeRate } = require('./src/server/7-strike-rate-of-batsman.js');

const { dismissedPlayer } = require('./src/server/8- dismissed-player.js');
const {
  bestEcoSupperOver,
} = require('./src/server/9-best-economy-blowler-superOver.js');

csvtojson()
  .fromFile('./src/data/matches.csv')
  .then((json) => {
    fs.writeFileSync('./src/data/matches.json', JSON.stringify(json));
  });

csvtojson()
  .fromFile('./src/data/deliveries.csv')
  .then((json) => {
    fs.writeFileSync('./src/data/deliveries.json', JSON.stringify(json));
    mainFunction();
  });

function mainFunction() {
  const matches = JSON.parse(
    fs.readFileSync('./src/data/matches.json', 'utf-8')
  );
  const deliveries = JSON.parse(
    fs.readFileSync('./src/data/deliveries.json', 'utf-8')
  );

  const getMatchesPerYear = numberOfMatches(matches);

  fs.writeFileSync(
    'src/public/output/numberOfMatchesPerYear.json',
    JSON.stringify(getMatchesPerYear)
  );

  const getMatchesPerYearPerTeam = matchesYearPerTeam(matches);

  fs.writeFileSync(
    'src/public/output/numberOfMatchesPerYearPerTeam.json',
    JSON.stringify(getMatchesPerYearPerTeam)
  );
  const getExtraRunsPerTeam = getExtraRunsPerTeam2016(matches, deliveries);
  fs.writeFileSync(
    'src/public/output/extraRunsPerTeam.json',
    JSON.stringify(getExtraRunsPerTeam)
  );

  const top10EconomicalBowler2016 = top10EconomicBowler(matches, deliveries);
  fs.writeFileSync(
    'src/public/output/top10EconomicalBowler.json',
    JSON.stringify(top10EconomicalBowler2016)
  );

  const getTeamWinsTossAndMatch = teamWonTossAndMatch(matches);
  fs.writeFileSync(
    'src/public/output/teamWinsTossAndMatch.json',
    JSON.stringify(getTeamWinsTossAndMatch)
  );

  const getPlayerOfTheMatchEachSeason = playerOftheMatchPerYear(matches);
  fs.writeFileSync(
    'src/public/output/playerOfTheMatchEachSeason.json',
    JSON.stringify(getPlayerOfTheMatchEachSeason)
  );

  const getStrikeRateOfBatsman = strikeRate(
    matches,
    deliveries,
    // eslint-disable-next-line no-undef
    process.argv[2]
  );
  fs.writeFileSync(
    'src/public/output/strikeRateOfBatsman.json',
    JSON.stringify(getStrikeRateOfBatsman)
  );

  const getDismissedPlayer = dismissedPlayer(deliveries);
  fs.writeFileSync(
    'src/public/output/dismissedPlayer.json',
    JSON.stringify(getDismissedPlayer)
  );

  const getBestEconomyBowlerInSuperOver = bestEcoSupperOver(deliveries);
  fs.writeFileSync(
    'src/public/output/bestEconomyBowlerInSuperOver.json',
    JSON.stringify(getBestEconomyBowlerInSuperOver)
  );
}
