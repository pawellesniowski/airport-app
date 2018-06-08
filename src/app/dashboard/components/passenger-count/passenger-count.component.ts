import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  template: '<div>Total number of passengers: {{countPassengers()}}</div>'
})
export class PassengerCountComponent {
  @Input() items: Passenger[];
  constructor() {}

  countPassengers() {
    return this.items.length;
  }

}
