import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorRepairsService {

  constructor(private http: HttpClient) { }

  get_sensor_repairs_info(sensorID: number = 201) {
    let url = 'http://localhost:8000/sensor-repairs/' + sensorID;
    return this.http.get(url);
  }
}
