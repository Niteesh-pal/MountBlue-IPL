/* eslint-disable no-undef */
const {
  numberOfMatches,
} = require('/home/niteesh/mountBlue/javascript/ipl/src/server/1-matches-per-year.js');

const sampleData1 = [
  { season: '2008', team: 'ABC' },
  { season: '2009', team: 'XYZ' },
  { season: '2008', team: 'ABC' },
];
const sampleData2 = [
  { season: '2017', team: 'XYZ' },
  { season: '2017', team: 'PQR' },
  { season: '2017', team: 'Irfan' },
];

test('When No data is passed', () => {
  expect(numberOfMatches([])).toEqual({});
});

test('When One match is played', () => {
  expect(numberOfMatches([{ season: 2009, team: 'QWERT' }])).toEqual({
    2009: 1,
  });
});

test('When Multiple matches are played in different year', () => {
  expect(numberOfMatches(sampleData1)).toEqual({
    2008: 2,
    2009: 1,
  });
});

test('When multiple matches are played in a year', () => {
  expect(numberOfMatches(sampleData2)).toEqual({
    2017: 3,
  });
});
