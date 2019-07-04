import { initialState } from './reducers';
import { CREATE_CARDS_LIST } from "../constants/constants";

export default function cardsReducer(state = initialState.cardsState, action) {
  switch (action.type) {
    case CREATE_CARDS_LIST:
      return { cardsList: action.payload.list };
    default:
      return state;
  }
}