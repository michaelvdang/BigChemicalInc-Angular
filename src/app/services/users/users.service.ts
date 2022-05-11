import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getDate()
  {
    let url = 'http://localhost:8000/employee-access-rights/1';
    // let url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);//, {headers: {''}});
  }
}