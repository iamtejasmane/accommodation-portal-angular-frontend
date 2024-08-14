import { UserService } from './../user.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = []
  collectionSize : number
  pageSize = 4
  page = 1

  constructor(
    private toastr: ToastrService,
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }
  loadUsers(){
    this.service.getUsers().subscribe((res)=>{
      if(res['status'] == 'success'){
        this.users = res['data']
        console.log(this.users)
        this.collectionSize = this.users.length;
      }
      else
        this.toastr.error(res['error'])
    })
  }
  deleteUser(id: number){
    this.service.deleteUsers(id).subscribe((res)=>{
      if(res['status'] == 'success')
        this.loadUsers()
      else
        this.toastr.error(res['error'])
    })
  }
}
