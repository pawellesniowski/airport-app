import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../../APIs/passengers.api';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-viewer-passenger',
  template: `
  <div>
    viewer passenger component
    {{passenger | json}}
    <app-passenger-form></app-passenger-form>
  </div>
  `,
  styleUrls: ['viewer-passengers.component.scss']
})
export class ViewerPassengersComponent implements OnInit {

  passenger: Passenger;

  constructor(private passengerDashboardService: PassengerDashboardService) {}

  ngOnInit() {
    this.passengerDashboardService.getPassenger(1)
      .subscribe((data: Passenger) => {
        this.passenger = data;
      });
  }
}
