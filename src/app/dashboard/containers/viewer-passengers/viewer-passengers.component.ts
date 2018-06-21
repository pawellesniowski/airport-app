import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../../APIs/passengers.api';
import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-viewer-passenger',
  template:  `
    <h3>View Passenger</h3>
    <button (click)="goBack()">< Go Back</button>
    <div>
      <app-passenger-form
        [passenger]="passenger"
        (update)="onUpdatePassenger($event)"
      >
      </app-passenger-form>
    </div>
  `,
  styleUrls: ['viewer-passengers.component.scss']
})
export class ViewerPassengersComponent implements OnInit {

  passenger: Passenger;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerDashboardService: PassengerDashboardService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => this.passengerDashboardService.getPassenger(data.id))
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(passenger: Passenger) {
    this.passengerDashboardService
      .updatePassenger(passenger)
      .subscribe((data: Passenger) => {
        console.log('data2: ', data);
        this.passenger = Object.assign({}, this.passenger, data);
      });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

}
