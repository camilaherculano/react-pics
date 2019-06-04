import unsplash from '../api/unsplash';
import { ofType, createEpicMiddleware } from 'redux-observable';
import { GET_UNSPLASH, successUnsplash, errorUnsplash } from './actions';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

export const epicMiddleware = createEpicMiddleware();

export const searchImageEpic = action$ =>
  action$.pipe(
    ofType(GET_UNSPLASH),
    switchMap(action => {
        return from(unsplash.get('/search/photos', { params: { query: action.payload.term }})).pipe(
          map(response => successUnsplash(response)),
          catchError(error => of(errorUnsplash(error)))
        );
      }
    )
  );
