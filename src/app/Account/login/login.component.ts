import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formModel:FormGroup ;
  constructor(private accountService:AccountService) {
   
    this.formModel=new FormGroup(
      {
       
        email:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required,Validators.minLength(7)]),
      });

  }

  get email ()
  {
    return this.formModel.controls['email'];
  }
  get password ()
  {
    return this.formModel.controls['password'];
  }
  LogIn()
  {
    this.accountService.LogInUser(this.formModel.value).subscribe
    (
      
     (response)=>
     {
         if(response.status==200)
         {
           let token=response.Data;
          localStorage.setItem('Token', token);
          // her should router to home page
             //this.router.navigate(['/student/home']);
             
         }
         else
         {
          console.log('error not resisteration')
           //let msg =`Can't add  this student Status code ${response.status}`;
           //this.router.navigate([`/NotFound/${msg} `]);
         }
     }
    )
  
  }
}
