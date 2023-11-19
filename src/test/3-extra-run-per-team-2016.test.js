/* eslint-disable no-undef */
const {
  getExtraRunsPerTeam2016,
} = require('../server/3-extra-run-per-team-2016.js');

const singlePlayer = [
  {
    id: '1',
    season: '2016',
  },
];
const singlePlayerDeliveries = [
  {
    match_id: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Mumbai Indians',
    extra_runs: '2',
  },
];

const sampleData1 = [
  {
    id: '1',
    season: '2016',
  },
  {
    id: '2',
    season: '2016',
  },
  {
    id: '3',
    season: '2016',
  },
  {
    id: '4',
    season: '2017',
  },
];
const sampleData2 = [
  {
    match_id: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Royal Challengers Bangalore',
    extra_runs: '3',
  },
  {
    match_id: '2',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Mumbai Indians',
    extra_runs: '2',
  },
  {
    match_id: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Mumbai Indians',
    extra_runs: '2',
  },
  {
    match_id: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'XYZ',
    extra_runs: '1',
  },
  {
    match_id: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Mumbai Indians',
    extra_runs: '2',
  },
  {
    match_id: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'ABC',
    extra_runs: '2',
  },
];

test('When no data is passed', () => {
  expect(getExtraRunsPerTeam2016([], [])).toEqual({});
});

test('when one player plays game', () => {
  expect(getExtraRunsPerTeam2016(singlePlayer, singlePlayerDeliveries)).toEqual(
    {
      'Mumbai Indians': 2,
    }
  );
});

test('when multiplayer playes game', () => {
  expect(getExtraRunsPerTeam2016(sampleData1, sampleData2)).toEqual({
    'Royal Challengers Bangalore': 3,
    'Mumbai Indians': 6,
    ABC: 2,
    XYZ: 1,
  });
});
