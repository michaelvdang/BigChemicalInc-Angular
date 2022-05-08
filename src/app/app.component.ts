import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { FriendComponent } from './friend/friend.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  employee: any;
  // employee = list;
  constructor(private user:UsersService)
  {
    this.user.getDate().subscribe(
      data=>{
        this.employee = data;
        console.log(this.employee)
    });
  }
}
