function strikeRate(matchData, deliveryData, player) {
  const id = matchData.reduce((acc, match) => {
    if (!acc.hasOwnProperty(match.id)) {
      acc[match.id] = match.season;
    }

    return acc;
  }, {});

  // console.log(id);

  const strikeOfPlayer = deliveryData.reduce((acc, matchDelivery) => {
    if (player === undefined) {
      if (!acc.hasOwnProperty(id[matchDelivery.match_id])) {
        acc[id[matchDelivery.match_id]] = {};
      }

      if (
        !acc[id[matchDelivery.match_id]].hasOwnProperty(matchDelivery.batsman)
      ) {
        acc[id[matchDelivery.match_id]][matchDelivery.batsman] = {
          total_runs: 0,
          total_balls: 0,
          strike: 0,
        };
      }

      acc[id[matchDelivery.match_id]][matchDelivery.batsman].total_runs +=
        Number(matchDelivery.batsman_runs);

      if (matchDelivery['wide_runs'] > 0 || matchDelivery['noball_runs'] > 0) {
        return acc;
      }

      acc[id[matchDelivery.match_id]][matchDelivery.batsman].total_balls++;

      acc[id[matchDelivery.match_id]][matchDelivery.batsman].strike = (
        (acc[id[matchDelivery.match_id]][matchDelivery.batsman].total_runs /
          acc[id[matchDelivery.match_id]][matchDelivery.batsman].total_balls) *
        100
      ).toFixed(2);

      return acc;
    } else {
      if (!acc.hasOwnProperty(id[matchDelivery.match_id])) {
        acc[id[matchDelivery.match_id]] = {};
      }

      if (player != matchDelivery.batsman) {
        return acc;
      } else {
        if (!acc[id[matchDelivery.match_id]].hasOwnProperty(player)) {
          acc[id[matchDelivery.match_id]][player] = {
            total_runs: 0,
            total_balls: 0,
            strike: 0,
          };
        }

        acc[id[matchDelivery.match_id]][player].total_runs += Number(
          matchDelivery.batsman_runs
        );

        if (
          matchDelivery['wide_runs'] > 0 ||
          matchDelivery['noball_runs'] > 0
        ) {
          return acc;
        }

        acc[id[matchDelivery.match_id]][player].total_balls++;
        acc[id[matchDelivery.match_id]][player].strike = (
          (acc[id[matchDelivery.match_id]][player].total_runs /
            acc[id[matchDelivery.match_id]][player].total_balls) *
          100
        ).toFixed(2);

        return acc;
      }

      // eslint-disable-next-line no-unreachable
      return acc;
    }
  }, {});

  return strikeOfPlayer;
}

module.exports.strikeRate = strikeRate;
