import unsplash from '../api/unsplash';
import { ofType } from 'redux-observable';
import { GET_UNSPLASH, successUnsplash, errorUnsplash } from './actions';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

const onSearchSubmit = term => {
  return unsplash.get('/search/photos', {
    params: { query: term }
  });
};

// export const searchImageEpic = action$ =>
//   action$.pipe(
//     ofType(GET_UNSPLASH),
//     switchMap(action => onSearchSubmit(action.payload)).pipe(
//       tap(console.log),
//       map(response => successUnsplash(response)),
//       catchError(error => of(errorUnsplash(error)))
//     )
//   );

export const searchImageEpic = action$ =>
  action$.pipe(
    ofType(GET_UNSPLASH),
    switchMap(action =>
      unsplash.get('/search/photos', {
        params: { query: action.payload }
      })
    ).pipe(
      map(response => successUnsplash(response)),
      catchError(error => of(errorUnsplash(error)))
    )
  );
