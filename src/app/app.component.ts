import { Component } from '@angular/core';
// import { FriendComponent } from './friend/friend.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  employee: any;
  // employee = list;
  constructor()
  {
    // this.user.getDate().subscribe(
    //   data=>{
    //     this.employee = data;
    //     console.log(this.employee);
    // });
    
  }
}
