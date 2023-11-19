function top10EconomicBowler(matchData, deliveryData) {
  const id = matchData.reduce((acc, cur) => {
    if (cur['season'] === '2015') {
      acc.push(cur['id']);
    }

    return acc;
  }, []);

  const economicalPlayerData = deliveryData.reduce((acc, cur, i) => {
    if (!id.includes(cur['match_id'])) {
      return acc;
    }
    if (!acc.some((player) => player['bowler'] === cur['bowler'])) {
      acc.push({ bowler: cur['bowler'], run: 0, ball: 0, economy: 0 });
    }

    const playerIndex = acc.findIndex(
      (player) => player['bowler'] === cur['bowler']
    );
    acc[playerIndex]['run'] += Number(
      cur['total_runs'] - Number(cur['legbye_runs'] - Number(cur['bye_runs']))
    );

    if (Number(cur['wide_runs']) > 0 || Number(cur['noball_runs'] > 0)) {
      return acc;
    }

    acc[playerIndex]['ball']++;
    acc[playerIndex]['economy'] = (
      (acc[playerIndex]['run'] / acc[playerIndex]['ball']) *
      6
    ).toFixed(2);

    return acc;
  }, []);

  const sortedEconomicalPlayer = economicalPlayerData.sort((a, b) => {
    if (Number(a.economy) > Number(b.economy)) {
      return 1;
    } else {
      return -1;
    }
  });

  const top10EconomicBowler = sortedEconomicalPlayer.filter((count, index) => {
    if (index < 10) {
      return true;
    }
  });

  return top10EconomicBowler;
}
module.exports.top10EconomicBowler = top10EconomicBowler;
