import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'; // Import HttpClient
import { Observable, map } from 'rxjs';
import { IRegistration } from 'src/IObjects/Account/iregistration';
import { ReturnResult } from 'src/IObjects/return-result';
import { environment } from 'src/environments/environment';
import { ILogin } from 'src/IObjects/Account/ilogin';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
 url :string ;

  constructor(private httpclient:HttpClient)
   { 
        this.url = environment.apiUrl;
   }

   RegistrationUser(item: IRegistration): Observable<ReturnResult> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/plain'
    });
  
    return this.httpclient.post(`${this.url}/Account/regiseration`, item, {
      headers: headers,
      responseType: 'text', // Specify the response type as text
      observe: 'response'
    }).pipe(
      map(response => {
        let result: ReturnResult = {
          status: response.status,
          Data: response.body
        };
        return result;
      })
    );
  }

  LogInUser(item :ILogin): Observable<ReturnResult>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/plain'
    });
  
    return this.httpclient.post(`${this.url}/Account/login`, item, {
      headers: headers,
      responseType: 'text', 
      observe: 'response'
    }).pipe(
      map(response => {
        let result: ReturnResult = {
          status: response.status,
          Data: response.body
        };
        return result;
      })
    );
  }

   
}
