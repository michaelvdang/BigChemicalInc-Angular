import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorActivationsService {

  constructor(private http: HttpClient) { }
  get_sensor_activations() {
    let url = 'http://localhost:8000/sensor-activations';
    return this.http.get(url);
  }
}
