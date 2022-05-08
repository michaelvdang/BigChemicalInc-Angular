import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  degrees: any;
  constructor() { 
    this.degrees = [

    ];
  }

  ngOnInit(): void {
  }
}
