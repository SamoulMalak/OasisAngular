import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn: boolean;
  constructor(private userServices :UserService)
   {
    
    this.isLoggedIn = this.userServices.IsLogIn();
  }

  IsLogIn():boolean
  {
    console.log(this.userServices.IsLogIn());
    return this.isLoggedIn;
  }

  LogOut()
  {
    this.userServices.LogOut();
    this.isLoggedIn = false;
  }

}
