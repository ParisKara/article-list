import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListElement } from '../list/list.models';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDisplayComponent {
  // Inputs/Outputs:
  @Input() displayedArticle: ListElement;
}
