import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeAccessRightsComponent } from './components/employee-access-rights/employee-access-rights.component';
import { SensorRepairsComponent } from './components/sensor-repairs/sensor-repairs.component';
import { SensorInfoComponent } from './components/sensor-info/sensor-info.component';
import { EmployeeTrackingComponent } from './components/employee-tracking/employee-tracking.component';
import { SensorActivationsComponent } from './components/sensor-activations/sensor-activations.component';
import { PostTestComponent } from './components/post-test/post-test.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeInfoComponent,
    EmployeeAccessRightsComponent,
    SensorRepairsComponent,
    SensorInfoComponent,
    EmployeeTrackingComponent,
    SensorActivationsComponent,
    PostTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
