import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private url = 'http://localhost:4000/city'

  constructor(private http: HttpClient) { }

  getCities(id){
    const httpOptions = {
      headers : new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    return this.http.get(this.url + '/' + id , httpOptions)
  }
}
