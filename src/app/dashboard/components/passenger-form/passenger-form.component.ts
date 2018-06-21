import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['passenger-form.component.scss']
})
export class PassengerFormComponent {
  @Input() passenger: Passenger;

  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  }, {
    key: 'hand-only',
    value: 'Hand baggage'
  }, {
    key: 'hold-only',
    value: 'Hold baggage'
  }, {
    key: 'hand-hold',
    value: 'Hand and hold baggage'
  }];

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.passenger.checkInDate = +new Date();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }

}
