import { initialState } from './reducers';
import {SET_USER_INFO} from "../constants/constants";

export default function settingsReducer(state = initialState.settingsState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        username: action.payload.username,
        email: action.payload.email,
        countOfCards: action.payload.countOfCards,
        cardsShirt: action.payload.cardsShirt
      };
    default:
      return state;
  }
}