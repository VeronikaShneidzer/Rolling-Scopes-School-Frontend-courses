import { combineReducers } from 'redux';

import settingsReducer from "./settingsReducer";
import table_of_recordsReducer from "./table_of_recordsReducer";
import timerReducer from "./timerReducer";
import cardsReducer from "./cardsReducer";

export const initialState = {
  settingsState: {
    username: "NikaNeider",
    email: "nika.neider@gmail.com",
    countOfCards: 6,
    cardsShirt: "memes",
    warning: ""
  },
  timerState: {
    whenGameStart: new Date().getTime(),
    time: ""
  },
  cardsState: {
    cardsList: "",
  },
  table_of_recordsState: {
    scoreboard: ""
  }
};

const reducer = combineReducers({
  settings: settingsReducer,
  table_of_records: table_of_recordsReducer,
  timer: timerReducer,
  cards: cardsReducer
});

export default reducer