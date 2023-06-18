import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ListElement } from './list.models';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, map, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, OnDestroy {
  // Inputs/Outputs:
  @Input() listItems: ListElement[];
  @Input() isLoading: boolean;
  @Output() itemClicked: EventEmitter<ListElement> = new EventEmitter();
  @Output() searchByTitle: EventEmitter<string> = new EventEmitter();

  // Public Properties:
  public searchControl: FormControl = new FormControl();
  public selectedItemId: string = null;

  // Private Properties:
  private subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    // Get the value changes of the search input and emit
    // the search parameter.
    this.subscriptions.add(
      this.searchControl.valueChanges
        .pipe(
          debounceTime(750),
          map((value: string) => value.trim()),
          distinctUntilChanged()
        )
        .subscribe((searchParameter) =>
          this.searchByTitle.emit(searchParameter)
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Emit the even whenever the item is clicked.
   * @param item: The item that was clicked.
   */
  public onItemClick(item: ListElement): void {
    this.selectedItemId = item.id;
    this.itemClicked.emit(item);
  }

  /**
   * Checks if the item is selected.
   * @param itemId: The id of the item.
   * @returns true if the item is selected.
   */
  public isItemSelected(itemId: string): boolean {
    return this.selectedItemId === itemId;
  }
}
