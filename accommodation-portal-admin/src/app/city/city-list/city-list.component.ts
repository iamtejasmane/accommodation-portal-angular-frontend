import { CityService } from './../city.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  states = []
  cities = []
  constructor(
    private toastr : ToastrService,
    private service : CityService
  ) { }

  ngOnInit(): void {
    this.loadCity()
  }
  loadCity(){
    this.service
      .getCities(1)// manual value
      .subscribe(res =>{
        if(res['status'] == 'success')
          this.states = res['data']
        else
          this.toastr.error(res['error'])
      })
  }

}
