import { Component, OnInit } from '@angular/core';
import { EmployeeTrackingService } from 'src/app/services/employee-tracking/employee-tracking.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-employee-tracking',
  templateUrl: './employee-tracking.component.html',
  styleUrls: ['./employee-tracking.component.css']
})

export class EmployeeTrackingComponent implements OnInit {

  data: any;
  employee_accesses: Array<any> = [];
  office_info: any;
  tracking_log: Array<any> = [];
  @Input()
  date: string = '04-12-2022';
  @Input()
  startTime: string = '07:00';
  startDate: string = '01-01-2000 05:22';
  // startDate: string = '01-01-2000';
  @Input()
  endTime: string = '19:55';
  // endDate: string = '12-31-2050';

  constructor(private service: EmployeeTrackingService) { 
    this.service.get_employee_accesses().subscribe(
      data => {
        this.data = data;
        this.employee_accesses = this.data.accesses;
        this.office_info = this.data.office_info;
        for (let i = 0; i < this.employee_accesses.length; i++){
          if (this.employee_accesses[i].direction == 'in') {
            this.tracking_log.push({ // concat or push?
                  accesses_index    : i,  // index of the 'in' access in employee_acceses
                  date              : this.employee_accesses[i].date,
                  time_in           : this.employee_accesses[i].time,
                  building          : this.employee_accesses[i].building,
                  roomID            : this.employee_accesses[i].roomID,
                  time_out          : '',
                  door              : this.employee_accesses[i].doorID
            });
          }
          else { // access direction is 'out'
            // back track to other employee_accesses to the same room in tracking_log
            let j = this.tracking_log.length - 1;
            let found_match = false;
            while (j >= 0 && !found_match){
              // check that access direction is 'in' and to the same room
              // to edit 'time-out'
              if (this.tracking_log[j].time_out == '' &&
                    this.tracking_log[j].roomID == this.employee_accesses[i].roomID &&
                    this.tracking_log[j].building == this.employee_accesses[i].building) {
                this.tracking_log[j].time_out = this.employee_accesses[i].time;
                found_match = true;
              }
              j--;
            }
            // can't find employee 'in', must be error 
            if (!found_match) {
              this.tracking_log.push({
                index    : i,
                date     : this.employee_accesses[i].date,
                time_in  : '',
                building : this.employee_accesses[i].building,
                roomID   : this.employee_accesses[i].roomID,
                time_out : this.employee_accesses[i].time,
                door     : this.employee_accesses[i].doorID
              });
            }
          }
        }
        console.log(this.data);
      }
    )
  }

  ngOnInit(): void {
  }

}
