import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Modules:
import { DashboardModule } from './dashboard/dashboard.module';

// Components:
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules:
    BrowserModule,
    CommonModule,
    // Custom Modules:
    DashboardModule,
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
