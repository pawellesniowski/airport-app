import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

// Modules:
import { DashboardModule } from './dashboard/dashboard.module';

// Components:
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found-component.component';

// services:
import { PassengerDashboardService } from './APIs/passengers.api';
import { DashboardPassengersComponent } from './dashboard/containers/dashboard-passangers/dashboard-passengers.component';
import {ViewerPassengersComponent} from './dashboard/containers/viewer-passengers/viewer-passengers.component';

// routes:
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'd', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular Modules:
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // Custom Modules:
    DashboardModule,
  ],
  bootstrap: [AppComponent],
  providers: [PassengerDashboardService,
    {provide: PassengerDashboardService, useClass: PassengerDashboardService}
  ],

})
export class AppModule {}
