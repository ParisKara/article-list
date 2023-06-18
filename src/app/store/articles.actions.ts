import { createAction, props } from '@ngrx/store';
import { ApiResponse } from '../models/article.models';

export const fetchArticles = createAction(
  '[Articles] Fetch Articles',
  props<{ searchParameter: string }>()
);

export const fetchArticlesSuccess = createAction(
  '[Articles] Fetch Articles Success',
  props<{ response: ApiResponse }>()
);

export const fetchArticlesFailure = createAction(
  '[Articles] Fetch Articles Failure'
);
