import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { FriendComponent } from './friend/friend.component';
import { EmployeeAccessRightsComponent } from './components/employee-access-rights/employee-access-rights.component';
import { EmployeeAccessesComponent } from './components/employee-accesses/employee-accesses/employee-accesses.component';
import { SensorRepairsComponent } from './components/sensor-repairs/sensor-repairs.component';
import { SensorInfoComponent } from './components/sensor-info/sensor-info.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeInfoComponent,
    FriendComponent,
    EmployeeAccessRightsComponent,
    EmployeeAccessesComponent,
    SensorRepairsComponent,
    SensorInfoComponent
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
