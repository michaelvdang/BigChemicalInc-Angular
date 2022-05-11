import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Friend {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public department: string,
    public email: string,
    public country: string
  ) 
  {

  }
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  friends: Friend[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  getFriends() {
    this.httpClient.get<any>('http://localhost:8000/employees/1').subscribe(
      response => {}
    )
  }

}
