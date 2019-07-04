import {SET_USER_INFO} from "../constants/constants";

export const setUserInfo = (username, email, countOfCards, cardsShirt) => ({
  type: SET_USER_INFO,
  payload: {
    username,
    email,
    countOfCards,
    cardsShirt
  }
});