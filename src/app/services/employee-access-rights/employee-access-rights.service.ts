import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAccessRightsService {

  constructor(private http: HttpClient) { }

  get_employee_access_rights(employeeID: number = 1) {
    let url = 'http://localhost:8000/employee-access-rights/' + employeeID;
    return this.http.get(url);
  }
}
