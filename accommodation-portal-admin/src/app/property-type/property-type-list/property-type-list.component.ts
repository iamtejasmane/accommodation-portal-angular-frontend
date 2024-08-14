import { PropertyTypeService } from './../property-type.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-type-list',
  templateUrl: './property-type-list.component.html',
  styleUrls: ['./property-type-list.component.css']
})
export class PropertyTypeListComponent implements OnInit {

  pTypes = []
  headElements = ['Id', 'Property Type', 'Action'];
  constructor(
    private toastr : ToastrService,
    private service : PropertyTypeService
  ) { }

  ngOnInit(): void {
    this.loadPropertyTypes()
  }
  
  loadPropertyTypes(){
    this.service
      .getPropertyTypes()
      .subscribe(res =>{
        if(res['status'] == 'success')
          this.pTypes = res['data']
        else
          this.toastr.error(res['error'])
      })
  }

}
