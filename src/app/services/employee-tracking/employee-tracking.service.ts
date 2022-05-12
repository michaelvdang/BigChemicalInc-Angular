import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTrackingService {

  constructor(private http: HttpClient) { }
  get_employee_accesses(employeeID: number = 1,
                        startDate: string = '04-11',
                        endDate: string = '04-15') {
    let url = 'http://localhost:8000/tracking-log/' + employeeID + '?startDate=' + startDate + '&endDate=' + endDate;
    return this.http.get(url);
  }
}
