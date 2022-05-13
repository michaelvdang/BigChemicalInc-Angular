import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTrackingService {

  constructor(private http: HttpClient) { }
  get_employee_accesses(employeeID: number = 1,
                        date: string = '04-12-2022',
                        // startDate: string = '04-12-2022',
                        startTime: string = '05:55',
                        // endDate: string = '04-15-2022',
                        endTime: string = '19:45') {
    let url = 'http://localhost:8000/tracking-log/' + employeeID + 
                  '?startDate=' + date +
                  '&startTime=' + startTime + 
                  // '&endDate=' + endDate +
                  '&endTime=' + endTime;
    return this.http.get(url);
  }
}
