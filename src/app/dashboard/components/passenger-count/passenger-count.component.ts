import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  template: '<div>Checked in passengers: {{countCheckedIn()}} / {{countPassengers()}}</div>'
})
export class PassengerCountComponent {
  @Input() items: Passenger[];
  constructor() {}

  countCheckedIn() {
    return this.items.filter((item) => item.checkedIn ).length;
  }

  countPassengers() {
    return this.items.length;
  }

}
