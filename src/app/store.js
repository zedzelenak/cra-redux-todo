import {createStore} from 'redux';

const initialState = [];
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((todo) => {
        return todo !== action.payload;
      });
    case 'removeAll':
      return action.payload;
    default:
      return state;
  }
};

export const store = createStore(reducer);