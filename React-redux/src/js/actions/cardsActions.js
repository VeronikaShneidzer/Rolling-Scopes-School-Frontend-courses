import { CREATE_CARDS_LIST } from '../constants/constants';

export const createCardsList = (list) => ({
  type: CREATE_CARDS_LIST,
  payload: {
    list
  }
});