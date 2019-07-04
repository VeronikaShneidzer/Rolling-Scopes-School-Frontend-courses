import { CREATE_SCOREBOARD } from '../constants/constants';

export const createScoreboard = (scoreboard) => ({
  type: CREATE_SCOREBOARD,
  payload: {
    scoreboard
  }
});