function dismissedPlayer(data) {
  const higestDissmedBatsman = {
    batsman: '',
    bowler: '',
    no_of_times: 0,
  };

  // eslint-disable-next-line no-unused-vars
  const list = data.reduce((acc, player) => {
    if (player['dismissal_kind'] === 'run out') {
      return acc;
    }
    if (player['player_dismissed'] === '') {
      return acc;
    }

    if (!acc[player['bowler']]) {
      acc[player['bowler']] = {};
    }

    if (!acc[player['bowler']][player['player_dismissed']]) {
      acc[player['bowler']][player['player_dismissed']] = 0;
    }

    acc[player['bowler']][player['player_dismissed']]++;

    if (
      higestDissmedBatsman.no_of_times <
      acc[player['bowler']][player['player_dismissed']]
    ) {
      higestDissmedBatsman.batsman = player.player_dismissed;
      higestDissmedBatsman.bowler = player.bowler;
      higestDissmedBatsman.no_of_times =
        acc[player['bowler']][player['player_dismissed']];
    }

    return acc;
  }, []);

  return higestDissmedBatsman;
  // console.log(list);
}

module.exports.dismissedPlayer = dismissedPlayer;
