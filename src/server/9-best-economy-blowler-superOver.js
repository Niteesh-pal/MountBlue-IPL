// function bestEcoSupperOver(deliveryData) {
//   // const obj = deliveryData.reduce((acc, cur) => {

//   // },{});

//   const data = {};

//   for (let key of deliveryData) {
//     if (key['is_super_over'] > 0) {
//       if (!data[key['bowler']]) {
//         data[key['bowler']] = { run: 0, ball: 0, economy: 0 };
//       }

//       data[key['bowler']]['run'] += Number(key['total_runs']);

//       if (Number(key['wide_runs']) > 0 || Number(key['noball_runs'] > 0)) {
//         data[key['bowler']]['economy'] = Math.round(
//           (data[key['bowler']]['run'] / data[key['bowler']]['ball']) * 6
//         );
//       } else {
//         data[key['bowler']]['ball']++;
//         data[key['bowler']]['economy'] = Math.round(
//           (data[key['bowler']]['run'] / data[key['bowler']]['ball']) * 6
//         );
//       }
//     }
//   }
//   console.log(data);

//   let min = 100;
//   let bowl;
//   let ans = [];

//   for (let key in data) {
//     if (data[key]['economy'] < min) {
//       min = data[key]['economy'];
//       bowl = key;
//     }
//   }
//   // console.log();

//   ans.push({ bowler: bowl, economy: min });

//   // return ans;
// }

// module.exports = bestEcoSupperOver;

function bestEcoSupperOver(deliveryData) {
  // eslint-disable-next-line no-unused-vars
  const list = deliveryData.reduce((acc, player) => {
    if (player.is_super_over > 0) {
      {
        if (!acc[player.bowler]) {
          acc[player.bowler] = { run: 0, ball: 0, economy: 0 };
        } else {
          acc[player.bowler]['run'] +=
            Number(player.total_runs) -
            Number(player.bye_runs) -
            Number(player.legbye_runs);

          if (Number(player.wide_runs) > 0 || Number(player.noball_runs) > 0) {
            return acc;
          }

          acc[player.bowler]['ball']++;
          acc[player.bowler]['economy'] =
            (acc[player.bowler]['run'] / acc[player.bowler]['ball']) * 6;
        }
      }
    }
    return acc;
  }, {});

  let min = 100;
  let bestEconomyPlayer = {};

  for (let key in list) {
    if (list[key]['economy'] < min) {
      min = list[key]['economy'];
      bestEconomyPlayer = {
        [key]: {
          run: list[key]['run'],
          ball: list[key]['ball'],
          economy: list[key]['economy'],
        },
      };
    }
  }

  return bestEconomyPlayer;
}

module.exports.bestEcoSupperOver = bestEcoSupperOver;
