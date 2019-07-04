import { initialState } from './reducers';
import { SET_TIME_IN_STATE } from '../constants/constants';

export default function timerReducer(state = initialState.timerState, action) {
  switch (action.type) {
    case SET_TIME_IN_STATE:
      return { time: action.payload.time };
    default:
      return state;
  }
}