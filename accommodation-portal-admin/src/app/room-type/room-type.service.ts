import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  private url = 'http://localhost:4000/room-type'

  constructor(private http: HttpClient) { }

  getRoomTypes(){
    const httpOptions = {
      headers : new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    return this.http.get(this.url, httpOptions)
  }
}
