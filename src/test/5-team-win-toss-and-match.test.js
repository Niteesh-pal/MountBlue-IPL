/* eslint-disable no-undef */
const {
  teamWonTossAndMatch,
} = require('/home/niteesh/mountBlue/javascript/ipl/src/server/5-team-win-toss-and-match.js');

const sampleData1 = [
  { toss_winner: 'abs', winner: 'abs' },
  { toss_winner: 'XYZ', winner: 'abs' },
  { toss_winner: 'ABC', winner: 'ABC' },
  { toss_winner: 'ET', winner: 'TE' },
  { toss_winner: 'abs', winner: 'abs' },
];

test('when no data is passed', () => {
  expect(teamWonTossAndMatch([])).toEqual({});
});

test('when one team win toss and also win match ', () => {
  expect(teamWonTossAndMatch([{ toss_winner: 'XYZ', winner: 'XYZ' }])).toEqual({
    XYZ: 1,
  });
});
test('when multiple team plays and win toss and match ', () => {
  expect(teamWonTossAndMatch(sampleData1)).toEqual({
    abs: 2,
    ABC: 1,
  });
});
