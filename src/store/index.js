import { createStore } from 'redux';

// types
const GET_UNSPLASH = 'UNSPLASH--GET_UNSPLASH';
const SUCCESS_UNSPLASH = 'UNSPLASH--SUCCESS_UNSPLASH';
const ERROR_UNSPLASH = 'UNSPLASH--ERROR_UNSPLASH';

const INIT = {
  images: []
};

const reducers = (state = INIT, action) => {
  switch (action.type) {
    case GET_UNSPLASH:
      return state;
    case SUCCESS_UNSPLASH:
      return { ...state, images: action.payload };
    case ERROR_UNSPLASH:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducers);
