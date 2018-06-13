import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Modules:
import { DashboardModule } from './dashboard/dashboard.module';

// Components:
import { AppComponent } from './app.component';

// services:
import { PassengerDashboardService } from './APIs/passengers.api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules:
    BrowserModule,
    CommonModule,
    HttpClientModule,
    // Custom Modules:
    DashboardModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    PassengerDashboardService
  ],

})
export class AppModule {}
