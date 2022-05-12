import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {

  constructor(private http: HttpClient) { }

  get_employee_info(employeeID: number = 1) {
    let url = 'http://localhost:8000/employees/' + employeeID;
    return this.http.get(url);
  }

  get_drug_test_results(employeeID: number = 1) {
    let url = 'http://localhost:8000/employees/' + employeeID + '/drug-test-results/';
    return this.http.get(url);
  }
}
