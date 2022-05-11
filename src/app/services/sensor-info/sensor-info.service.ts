import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorInfoService {

  constructor(private http: HttpClient) { }

  get_sensor_info() {
    let url = 'http://localhost:8000/sensors/';
    return this.http.get(url);
  }
}
