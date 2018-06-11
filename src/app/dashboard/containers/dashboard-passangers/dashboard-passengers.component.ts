import {Component, OnInit} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-dashboard-passengers-component',
  template: `
    <h3>Dashboard Passengers</h3>
    <div *ngFor="let passenger of passengers">
      {{passenger.fullname}}
    </div>
    <app-passenger-count
     [items]="passengers"
    ></app-passenger-count>
    <app-passenger-detail
      *ngFor="let passenger of passengers"
      [item]="passenger"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)"
    ></app-passenger-detail>
  `,
})
export class DashboardPassengersComponent implements OnInit {

  passengers: Passenger[];

  handleEdit(item: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === item.id) {
        passenger = Object.assign({}, passenger, item);
      }
      return passenger;
    });
    // this.passengers = [...this.passengers, item];
  }

  handleRemove(item) {
    console.log('handle REMOVE from passenger detail component', item.fullname);
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== item.id );
  }

  ngOnInit() {
    this.passengers = [
      {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
    }, {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }];
  }

}
