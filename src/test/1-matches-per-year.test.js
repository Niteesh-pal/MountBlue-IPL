/* eslint-disable no-undef */
const {
  numberOfMatches,
} = require('/home/niteesh/mountBlue/javascript/ipl/src/server/1-matches-per-year.js');

const sampleData1 = [
  { season: '2008', player: 'virat' },
  { season: '2009', player: 'JJ Bumrah' },
  { season: '2008', player: 'ABC' },
];
const sampleData2 = [
  { season: '2017', player: 'XYZ' },
  { season: '2017', player: 'KL Rahul' },
  { season: '2017', player: 'Irfan' },
];

test('Getting matches per year', () => {
  expect(numberOfMatches([])).toEqual({});
});

test('Getting matches per year', () => {
  expect(numberOfMatches(sampleData1)).toEqual({
    2008: 2,
    2009: 1,
  });
});

test('Getting matches per year', () => {
  expect(numberOfMatches(sampleData2)).toEqual({
    2017: 3,
  });
});
