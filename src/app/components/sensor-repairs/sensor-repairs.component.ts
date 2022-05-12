import { Component, OnInit } from '@angular/core';
import { SensorRepairsService } from 'src/app/services/sensor-repairs/sensor-repairs.service';

@Component({
  selector: 'app-sensor-repairs',
  templateUrl: './sensor-repairs.component.html',
  styleUrls: ['./sensor-repairs.component.css']
})
export class SensorRepairsComponent implements OnInit {
  data: any;
  sensor_repairs: any;
  constructor(private service: SensorRepairsService) { 
    this.service.get_sensor_repairs_info().subscribe(
      data => {
        // console.log(data);
        this.data = data;
        this.sensor_repairs = this.data.sensor_repairs;
        console.log(this.data);
      }
    );
  }

  ngOnInit(): void {
  }

}
