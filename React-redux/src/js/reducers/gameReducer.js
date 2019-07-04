import { initialState } from './reducers';


export default function gameReducer(state = initialState.gameState, action) {
  switch (action.type) {
    default:
      return state;
  }
}