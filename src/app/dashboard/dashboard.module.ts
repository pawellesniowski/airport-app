import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
// containers:
import {DashboardPassengersComponent} from './containers/dashboard-passangers/dashboard-passengers.component';
import {ViewerPassengersComponent} from './containers/viewer-passengers/viewer-passengers.component';
// components:
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';


// routes:
const routes: Routes = [{
  path: 'dashboard',
  children: [
    {path: '', component: DashboardPassengersComponent, pathMatch: 'full'},
    {path: 'passengers/:id', component: ViewerPassengersComponent, pathMatch: 'full'},
  ]
}];

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
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {}
