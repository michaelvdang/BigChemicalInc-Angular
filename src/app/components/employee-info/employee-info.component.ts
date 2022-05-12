import { Component, OnInit } from '@angular/core';
import { EmployeeInfoService } from 'src/app/services/employee-info/employee-info.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  employee_data: any;
  employee_info: any;
  drug_test_data: any;
  drug_test_results: any;

  constructor(private service: EmployeeInfoService) {
    this.service.get_employee_info().subscribe(
      data => {
        this.employee_data = data;
        this.employee_info = this.employee_data.employee_info;
      }
    );
    this.service.get_drug_test_results().subscribe(
      data => {
        this.drug_test_data = data;
        this.drug_test_results = this.drug_test_data.drug_test_results;
      }
    );
  }

  ngOnInit(): void {
  }
}
