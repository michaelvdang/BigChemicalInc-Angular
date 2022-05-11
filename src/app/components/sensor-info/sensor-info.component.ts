import { Component, OnInit } from '@angular/core';
import { SensorInfoService } from 'src/app/services/sensor-info/sensor-info.service';

@Component({
  selector: 'app-sensor-info',
  templateUrl: './sensor-info.component.html',
  styleUrls: ['./sensor-info.component.css']
})
export class SensorInfoComponent implements OnInit {
  data: any;
  sensors: any;
  constructor(private service: SensorInfoService) { 
    this.service.get_sensor_info().subscribe(
      data => {
        this.data = data;
        this.sensors = this.data.sensors;
      }
    );
  }

  ngOnInit(): void {
  }

}
