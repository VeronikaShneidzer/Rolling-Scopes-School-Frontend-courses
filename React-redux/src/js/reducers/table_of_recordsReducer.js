import { initialState } from './reducers';
import { CREATE_SCOREBOARD } from '../constants/constants';

export default function table_of_recordsReducer(state = initialState.table_of_recordsState, action) {
  switch (action.type) {
    case CREATE_SCOREBOARD:
      return { scoreboard: action.payload.scoreboard };
    default:
      return state;
  }
}