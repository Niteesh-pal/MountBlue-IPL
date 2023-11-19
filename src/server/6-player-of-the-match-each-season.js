function playerOftheMatchPerYear(matchData) {
  const list = matchData.reduce((acc, matches) => {
    if (!acc[matches.season]) {
      acc[matches.season] = {};
    }

    if (!acc[matches.season][matches.player_of_match]) {
      acc[matches.season][matches.player_of_match] = 0;
    }

    acc[matches.season][matches.player_of_match]++;

    return acc;
  }, []);
  // console.log(list);

  const playerOfTheMatch = {};

  for (const key in list) {
    let max = 0;
    let text = '';
    for (const innerKey in list[key]) {
      if (max < list[key][innerKey]) {
        max = list[key][innerKey];
        text = innerKey;
      }
    }
    // console.log(key);
    if (!playerOfTheMatch[key]) {
      playerOfTheMatch[key] = {};
    }
    if (!playerOfTheMatch[key][text]) {
      playerOfTheMatch[key][text] = max;
    }
  }

  return playerOfTheMatch;
}

module.exports.playerOftheMatchPerYear = playerOftheMatchPerYear;
