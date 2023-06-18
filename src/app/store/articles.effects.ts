import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, delay } from 'rxjs';
import {
  fetchArticles,
  fetchArticlesFailure,
  fetchArticlesSuccess,
} from './articles.actions';
import { dummyData } from '../mock/mock-data';
import { ApiResponse } from '../models/article.models';

@Injectable()
export class ArticlesEffects {
  fetchArticles = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchArticles),
      // Emulating BE logic
      switchMap(({ searchParameter }) => {
        // Filter the dummy data by the searchParameter if it exists.
        const filteredData = searchParameter
          ? {
              ...dummyData,
              data: dummyData.data.filter((article) =>
                article.attributes.title
                  .toLowerCase()
                  .includes(searchParameter.toLowerCase())
              ),
            }
          : dummyData;

        // Sort the filtered data by date.
        const sortedData = [...filteredData.data].sort(
          (a, b) =>
            new Date(a.attributes.created).getTime() -
            new Date(b.attributes.created).getTime()
        );

        return of({ ...filteredData, data: sortedData });
      }),
      // Small random delay to show the loader.
      delay(Math.random() * 800),
      map((response) => {
        return fetchArticlesSuccess({ response });
      }),
      catchError(() => {
        return of(fetchArticlesFailure());
      })
    )
  );

  constructor(private actions$: Actions) {}
}
