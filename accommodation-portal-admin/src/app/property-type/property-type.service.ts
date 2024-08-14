import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {
  private url = 'http://localhost:4000/property-type'


  constructor(private http: HttpClient) { }

  getPropertyTypes(){
    const httpOptions = {
      headers : new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    return this.http.get(this.url, httpOptions)
  }
}
