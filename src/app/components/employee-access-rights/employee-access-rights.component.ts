import { Component, OnInit } from '@angular/core';
import { EmployeeAccessRightsService } from 'src/app/services/employee-access-rights/employee-access-rights.service';

@Component({
  selector: 'app-employee-access-rights',
  templateUrl: './employee-access-rights.component.html',
  styleUrls: ['./employee-access-rights.component.css']
})
export class EmployeeAccessRightsComponent implements OnInit {
  show = true; // example: https://angular.io/api/common/NgIf

  data: any = {};
  access_rights: Array<any> = [];
  employee: any;
  buildings: any;
  constructor(private service: EmployeeAccessRightsService) {
    this.service.get_employee_access_rights().subscribe(
      data => {
        this.data = data;
        this.access_rights = this.data.access_rights;
        this.employee = this.access_rights[0];
        console.log(this.data);

        this.buildings = [... new Set(this.access_rights.map(item => item.buildingID))];
        console.log(this.buildings);
      }
    );

  }

  ngOnInit(): void {
  }

}
