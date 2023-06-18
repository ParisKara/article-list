import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import { articleReducer } from './store/articles.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffects } from './store/articles.effects';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoadingSpinnerComponent,
    ArticleDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      articles: articleReducer,
    }),
    EffectsModule.forRoot([ArticlesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
