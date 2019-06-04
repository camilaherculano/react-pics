export const GET_UNSPLASH = 'GET_UNSPLASH';
export const SUCCESS_UNSPLASH = 'SUCCESS_UNSPLASH';
export const ERROR_UNSPLASH = 'ERROR_UNSPLASH';

export const getUnsplash = term => {
  console.log(term);
  return {
    type: GET_UNSPLASH,
    payload: {
      term: term
    }
  };
};

export const successUnsplash = images => {
  return {
    type: SUCCESS_UNSPLASH,
    payload: {
      images: images.data.results
    }
  };
};

export const errorUnsplash = error => {
  return {
    type: ERROR_UNSPLASH,
    payload: {
      error: error
    }
  };
};
