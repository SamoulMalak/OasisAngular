import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ReturnResult } from 'src/IObjects/return-result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivetoDoService {
  url :string ;
  constructor(private httpclient:HttpClient) 
  {
    this.url = environment.apiUrl;
  }

  GetLiveToDO(pageNumber :number,pageSize:number): Observable<ReturnResult> {

  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
 
    });

    let LiveToDOParams = new HttpParams()
    .set('pageNumber', pageNumber.toString())
    .set('pageSize', pageSize.toString());

    return this.httpclient.get(`${this.url}/LiveToDo`, {
      headers: headers,
     params: LiveToDOParams,
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
