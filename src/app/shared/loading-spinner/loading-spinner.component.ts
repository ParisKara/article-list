import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template:
    '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./loading-spinner.component.scss'],
})

// Loading spinner from https://loading.io/css/
export class LoadingSpinnerComponent {}
