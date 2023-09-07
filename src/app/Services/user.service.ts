import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  IsLogIn():boolean
  {
    let token =localStorage.getItem('Token');
    if (token!=null)
     {
      return true;
    }
    return false;
  }

  LogOut()
  {
   
    localStorage.removeItem('Token');
  }
}
