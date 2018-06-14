import {Component, Injectable, OnInit, OnDestroy} from '@angular/core';
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
export class DashboardPassengersComponent implements OnInit, OnDestroy {

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
    this.passengerDashboardService.updatePassenger(passenger)
      .subscribe(() => {
        this.getPassengers();
      }, (error) => {
        alert('error, we can not edit this item, error: ' + error.statusText);
        this.getPassengers();
      });
  }

  handleRemove(passenger: Passenger) {
    this.passengers = this.passengers.filter((item: Passenger) => item.id !== passenger.id );
    this.passengerDashboardService.deletePassenger(passenger)
      .subscribe(() => {
        this.getPassengers();
      }, (error) => {
        alert('error, we can not delete this item, error: ' + error.statusText);
        this.getPassengers();
      });
  }

  ngOnDestroy() {

  }

}
