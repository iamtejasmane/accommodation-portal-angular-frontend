import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private url = 'http://localhost:4000/state'

  constructor(private http: HttpClient) { }

  getStates(){
    const httpOptions = {
      headers : new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    return this.http.get(this.url, httpOptions)
  }
}
