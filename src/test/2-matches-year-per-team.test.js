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

test('Getting matches per year', () => {
  expect(matchesYearPerTeam([])).toEqual({});
});

test('Getting matches per year', () => {
  expect(matchesYearPerTeam(sampleData1)).toEqual({
    2008: { 'Sunrisers Hyderabad': 1 },
    2009: { 'Royal Challengers Bangalore': 1 },
    2017: { 'Gujarat Lions': 1 },
  });
});

test('Getting matches per year', () => {
  expect(matchesYearPerTeam(sampleData2)).toEqual({
    2017: { XYZ: 3 },
  });
});
