import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICreatetodo } from 'src/IObjects/Todo/icreatetodo';
import { Iupdatetodo } from 'src/IObjects/Todo/iupdatetodo';
import { ReturnResult } from 'src/IObjects/return-result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url :string ;
   token =localStorage.getItem('Token');
  constructor(private httpclient:HttpClient) 
  { 
    this.url = environment.apiUrl;
  }


  CreateToDo(item: ICreatetodo): Observable<ReturnResult> {

  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  
    return this.httpclient.post(`${this.url}/ToDo`, item, {
      headers: headers,
     
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

  UpdateTodo(item: Iupdatetodo): Observable<ReturnResult>
  {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  
    return this.httpclient.put(`${this.url}/ToDo`, item, {
      headers: headers,
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


  DeleteTodo(Id:number): Observable<ReturnResult>
  {
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  
    return this.httpclient.delete(`${this.url}/ToDo/${Id}`, {
      headers: headers,
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

  GetToDoById(Id:number): Observable<ReturnResult>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  
    return this.httpclient.get(`${this.url}/ToDo/${Id}`, {
      headers: headers,
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
