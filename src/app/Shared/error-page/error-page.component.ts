import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {

  /**
   *
   */
 errorMessage :string='';
  constructor() {
   
    this.GetErrorMsg();
    
  }

  GetErrorMsg()
  {
    let msg =localStorage.getItem('msg');
    if(msg !=null)
    this.errorMessage=msg;
  }

}
