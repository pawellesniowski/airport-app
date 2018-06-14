import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// containers:
import { DashboardPassengersComponent } from './containers/dashboard-passangers/dashboard-passengers.component';
import { ViewerPassengersComponent } from './containers/viewer-passengers/viewer-passengers.component'


// components:
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
  declarations: [
    // containers:
    DashboardPassengersComponent,
    ViewerPassengersComponent,
    // components:
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    DashboardPassengersComponent,
    ViewerPassengersComponent
  ]
})
export class DashboardModule {}
