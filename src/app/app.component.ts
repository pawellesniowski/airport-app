import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-dashboard-passengers-component></app-dashboard-passengers-component>
  `
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Passengers List';
  }
}
