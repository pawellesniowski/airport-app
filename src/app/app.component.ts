import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-dashboard-passengers-component></app-dashboard-passengers-component>
    <app-viewer-passenger></app-viewer-passenger>
  `
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Passengers List';
  }
}
