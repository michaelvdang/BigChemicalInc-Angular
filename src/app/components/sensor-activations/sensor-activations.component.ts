import { Component, OnInit } from '@angular/core';
import { SensorActivationsService } from 'src/app/services/sensor-activations/sensor-activations.service';

@Component({
  selector: 'app-sensor-activations',
  templateUrl: './sensor-activations.component.html',
  styleUrls: ['./sensor-activations.component.css']
})
export class SensorActivationsComponent implements OnInit {
  data: any;
  sensor_activations: any;
  
  constructor(private service: SensorActivationsService) { 
    this.service.get_sensor_activations().subscribe(
      data => {
        this.data = data;
        this.sensor_activations = this.data.sensor_activations;
        console.log(this.data);
      }
    )
  }

  ngOnInit(): void {
  }

}
