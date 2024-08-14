import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  states = []
  constructor(
    private toastr : ToastrService,
    private service : StateService
  ) { }

  ngOnInit(): void {
    this.loadState()
  }
  loadState(){
    this.service
      .getStates()
      .subscribe(res =>{
        if(res['status'] == 'success')
          this.states = res['data']
        else
          this.toastr.error(res['error'])
      })
  }
}
