import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchArticles } from './store/articles.actions';
import { Observable } from 'rxjs';
import {
  selectDisplayArticles,
  selectLoader,
} from './store/articles.selectors';
import { ArticlesState } from './store/articles.reducer';
import { ListElement } from './list/list.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // Piblic Properties:
  public articles$: Observable<ListElement[]>;
  public isLoading$: Observable<boolean>;
  public selectedArticle: ListElement = null;

  constructor(private store: Store<{ articles: ArticlesState }>) {
    this.articles$ = store.select(selectDisplayArticles);
    this.isLoading$ = store.select(selectLoader);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchArticles({ searchParameter: null }));
  }

  /**
   * Updates the selectedArticle property.
   * @param selectedArticle: The article that was selected from the list.
   */
  public updateSelectedArticle(selectedArticle: ListElement): void {
    this.selectedArticle = selectedArticle;
  }

  /**
   * Dispatches the action to filter the artibles by Title.
   * @param titleToSearch: The string to be used as search parameter.
   */
  public searchByTitle(titleToSearch: string): void {
    this.store.dispatch(fetchArticles({ searchParameter: titleToSearch }));
  }
}
