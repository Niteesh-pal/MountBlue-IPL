/* eslint-disable no-undef */
const {
  matchesYearPerTeam,
} = require('/home/niteesh/mountBlue/javascript/ipl/src/server/2-matches-year-per-team.js');

const sampleData1 = [
  { season: '2008', winner: 'Sunrisers Hyderabad' },
  { season: '2009', winner: 'Royal Challengers Bangalore' },
  { season: '2017', winner: 'Gujarat Lions' },
];
const sampleData2 = [
  { season: '2017', winner: 'XYZ' },
  { season: '2017', winner: 'XYZ' },
  { season: '2017', winner: 'XYZ' },
];

test('when no data is passed', () => {
  expect(matchesYearPerTeam([])).toEqual({});
});

test('when one match is played by one team only', () => {
  expect(matchesYearPerTeam([{ season: '2006', winner: 'XYZ' }])).toEqual({
    2006: { XYZ: 1 },
  });
});

test('When multiple matches are palyed by team in different team', () => {
  expect(matchesYearPerTeam(sampleData1)).toEqual({
    2008: { 'Sunrisers Hyderabad': 1 },
    2009: { 'Royal Challengers Bangalore': 1 },
    2017: { 'Gujarat Lions': 1 },
  });
});

test('When multiple matches are played by different team in a year', () => {
  expect(
    matchesYearPerTeam([
      { season: '2008', winner: 'XYZ' },
      { season: '2008', winner: 'PQR' },
      { season: '2008', winner: 'QWERT' },
      { season: '2008', winner: 'ABC' },
      { season: '2008', winner: 'YUI' },
    ])
  ).toEqual({
    2008: { XYZ: 1, PQR: 1, QWERT: 1, ABC: 1, YUI: 1 },
  });
});

test('When multiple matches are played by team in a year', () => {
  expect(matchesYearPerTeam(sampleData2)).toEqual({
    2017: { XYZ: 3 },
  });
});
