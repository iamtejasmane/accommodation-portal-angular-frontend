import { RoomTypeService } from './../room-type.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {

  rTypes = []
  headElements = ['Id', 'Room Type', 'Action'];
  constructor(
    private toastr : ToastrService,
    private service : RoomTypeService
  ) { }

  ngOnInit(): void {
    this.loadRoomTypes()
  }
  loadRoomTypes(){
    this.service
      .getRoomTypes()
      .subscribe(res =>{
        if(res['status'] == 'success')
          this.rTypes = res['data']
        else
          this.toastr.error(res['error'])
      })
  }
}
