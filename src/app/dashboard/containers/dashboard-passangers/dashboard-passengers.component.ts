import {Component, Injectable, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
import {PassengerDashboardService} from '../../../APIs/passengers.api';

@Component({
  selector: 'app-dashboard-passengers-component',
  template: `
    <h3>Dashboard Passengers</h3>

    <div *ngIf="loading">
      ..loading
    </div>

    <ng-container *ngIf="!loading">
      <app-passenger-count
        [items]="passengers"
      ></app-passenger-count>

      <div
        *ngFor="let passenger of passengers">
        <app-passenger-detail
          [item]="passenger"
          (edit)="handleEdit($event)"
          (remove)="handleRemove($event)"
        ></app-passenger-detail>

      </div>
    </ng-container>
  `,
})
@Injectable()
export class DashboardPassengersComponent implements OnInit {

  passengers: Passenger[] = [];
  loading = false;

  constructor(private passengerDashboardService: PassengerDashboardService) {}

  ngOnInit() {
    this.getPassengers();
  }

  getPassengers() {
    this.loading = true;
    this.passengerDashboardService.getPassengers()
      .subscribe(
        (data: Passenger[]) => {
          console.log('data: ', data);
          this.passengers = data;
          this.loading = false;
        }
      );
  }

  handleEdit(passenger: Passenger) {
    // this.passengers = this.passengers.map((i: Passenger) => {
    //   if (passenger.id === i.id) {
    //     passenger = i;
    //   }
    //   return passenger;
    // });

    this.passengerDashboardService.updatePassenger(passenger)
      .subscribe((res) => {
        console.log('res: ', res);
      });
  }

  handleRemove(item) {
    console.log('handle REMOVE from passenger detail component', item.fullname);
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== item.id );
  }
}
