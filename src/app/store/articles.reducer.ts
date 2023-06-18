import { createReducer, on } from '@ngrx/store';
import {
  fetchArticles,
  fetchArticlesFailure,
  fetchArticlesSuccess,
} from './articles.actions';
import { ArticleItem, AuthorItem } from '../models/article.models';

export interface ArticlesState {
  articles: ArticleItem[];
  authors: AuthorItem[];
  loading: boolean;
}

const initialArticlesState = {
  articles: null,
  authors: null,
  loading: false,
};

export const articleReducer = createReducer(
  initialArticlesState,
  on(fetchArticles, (state) => ({
    ...state,
    loading: true,
  })),
  on(fetchArticlesSuccess, (state, action) => ({
    ...state,
    articles: action.response.data,
    authors: action.response.included,
    loading: false,
  })),
  on(fetchArticlesFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
