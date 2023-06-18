import { createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.reducer';
import { ArticleItem, AuthorItem } from '../models/article.models';
import { ListElement } from '../list/list.models';

export const selectArticles = (state: { articles: ArticlesState }) =>
  state.articles.articles;

export const selectAuthors = (state: { articles: ArticlesState }) =>
  state.articles.authors;

export const selectLoader = (state: { articles: ArticlesState }) =>
  state.articles.loading;

export const selectDisplayArticles = createSelector(
  selectArticles,
  selectAuthors,
  (articles: ArticleItem[], authors: AuthorItem[]) => {
    if (!articles || !authors) {
      return [];
    }

    // Creating the display data.
    const displayArticles = articles.map((article) => {
      const articleAuthor = authors.find(
        (author) => author.id === article.relationships.author.data.id
      );
      return {
        id: article.id,
        title: article.attributes.title,
        subtitle: `${articleAuthor.attributes.name} - ${new Date(
          article.attributes.created
        ).toDateString()}`,
        body: article.attributes.body,
      };
    });

    return displayArticles;
  }
);
