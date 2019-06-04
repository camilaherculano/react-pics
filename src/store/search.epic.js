import unsplash from '../api/unsplash';
import { ofType, createEpicMiddleware } from 'redux-observable';
import { GET_UNSPLASH, successUnsplash, errorUnsplash } from './actions';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

export const epicMiddleware = createEpicMiddleware();

export const searchImageEpic = action$ =>
  action$.pipe(
    ofType(GET_UNSPLASH),
    tap(console.log(action$.payload)),
    switchMap(action =>
      unsplash
        .get('/search/photos', {
          params: { query: action.payload.term }
        })
        // .pipe(
        //   map(response => successUnsplash(response)),
        //   catchError(error => of(errorUnsplash(error)))
        // )
    )
  );
