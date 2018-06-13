import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// containers:
import { DashboardPassengersComponent } from './containers/dashboard-passangers/dashboard-passengers.component';

// components:
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
  declarations: [
    DashboardPassengersComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [DashboardPassengersComponent]
})
export class DashboardModule {}
