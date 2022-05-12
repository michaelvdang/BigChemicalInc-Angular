import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { FriendComponent } from './friend/friend.component';
import { EmployeeAccessRightsComponent } from './components/employee-access-rights/employee-access-rights.component';
import { SensorRepairsComponent } from './components/sensor-repairs/sensor-repairs.component';
import { SensorInfoComponent } from './components/sensor-info/sensor-info.component';
import { EmployeeTrackingComponent } from './components/employee-tracking/employee-tracking.component';
import { SensorActivationsComponent } from './components/sensor-activations/sensor-activations.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeInfoComponent,
    FriendComponent,
    EmployeeAccessRightsComponent,
    SensorRepairsComponent,
    SensorInfoComponent,
    EmployeeTrackingComponent,
    SensorActivationsComponent
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
