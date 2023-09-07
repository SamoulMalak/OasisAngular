import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  formModel:FormGroup ;
  token :string='' ;
  
  constructor(private accountService:AccountService) {
   
    this.formModel=new FormGroup(
      {
        userName:new FormControl('',[Validators.required,Validators.minLength(4)]),
        email:new FormControl('',[Validators.required]),
        phone:new FormControl(''),
        password:new FormControl('',[Validators.required,Validators.minLength(4)]),
      });

  }
  get userName ()
  {
    return this.formModel.controls['userName'];
  }
  get email ()
  {
    return this.formModel.controls['email'];
  }
  get password ()
  {
    return this.formModel.controls['password'];
  }
  get phone ()
  {
    return this.formModel.controls['phone'];
  }
  RegistrationUser()
  {
    
    this.accountService.RegistrationUser(this.formModel.value).subscribe
    (
      
     (response)=>
     {
         if(response.status==200)
         {
          this.token=response.Data;
          localStorage.setItem('Token', this.token);
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
