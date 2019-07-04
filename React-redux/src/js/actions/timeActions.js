import { SET_TIME_IN_STATE } from '../constants/constants';

export const setTimeInState = (time) => ({
  type: SET_TIME_IN_STATE,
  payload: {
    time
  }
});