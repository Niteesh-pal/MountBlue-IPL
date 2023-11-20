/* eslint-disable no-undef */
const {
  playerOftheMatchPerYear,
} = require('/home/niteesh/mountBlue/javascript/ipl/src/server/6-player-of-the-match-each-season.js');

const sampleData1 = [
  { season: '2017', player_of_match: 'ABC' },
  { season: '2017', player_of_match: 'ABC' },
  { season: '2017', player_of_match: 'ASP' },
  { season: '2004', player_of_match: 'xyz' },
  { season: '2004', player_of_match: 'PQR' },
  { season: '2004', player_of_match: 'PQR' },
  { season: '2008', player_of_match: 'ABC' },
];

test('when no player in the season', () => {
  expect(playerOftheMatchPerYear([])).toEqual({});
});

test('when one player playes', () => {
  expect(
    playerOftheMatchPerYear([{ season: '2017', player_of_match: 'ABC' }])
  ).toEqual({
    2017: { ABC: 1 },
  });
});
test('when multiple matches are palyed in a season', () => {
  expect(
    playerOftheMatchPerYear([
      { season: '2008', player_of_match: 'ABC' },
      { season: '2008', player_of_match: 'ABC' },
      { season: '2008', player_of_match: 'ABC' },
      { season: '2008', player_of_match: 'ABC' },
    ])
  ).toEqual({ 2008: { ABC: 4 } });
});
test('when a team become man of the match in 2 different seasons', () => {
  expect(
    playerOftheMatchPerYear([
      { season: '2006', player_of_match: 'XYZ' },
      { season: '2007', player_of_match: 'XYZ' },
    ])
  ).toEqual({ 2006: { XYZ: 1 }, 2007: { XYZ: 1 } });
});

test('when a team become man of the match in 2 different seasons', () => {
  expect(
    playerOftheMatchPerYear([
      { season: '2006', player_of_match: 'XYZ' },
      { season: '2007', player_of_match: 'XYZ' },
      { season: '2006', player_of_match: 'XYZ' },
    ])
  ).toEqual({ 2006: { XYZ: 2 }, 2007: { XYZ: 1 } });
});

test('when multiple player playes', () => {
  expect(playerOftheMatchPerYear(sampleData1)).toEqual({
    2017: { ABC: 2 },
    2008: { ABC: 1 },
    2004: { PQR: 2 },
  });
});
