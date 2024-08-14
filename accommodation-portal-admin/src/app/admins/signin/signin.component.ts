import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = ''
  password = ''

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service : AdminService
  ) { }

  ngOnInit(): void {
  }

  onSignIn(){
    if(this.email.length == 0)
      this.toastr.warning('Please enter email')
    else if(this.password.length == 0)
      this.toastr.warning('Please enter password')
    else{
      this.service.signin(this.email, this.password)
      .subscribe(res => {
        if(res['status'] == 'success'){
          this.toastr.success('Welcome')

          const user = res['data']
          sessionStorage['user_name'] = user['firstName'] + ' ' + user['lastName']
          sessionStorage['token'] = user['token']
          
          this.router.navigate(['/property-list'])
        }else{
          this.toastr.error(res['error'])
        }
      })
    }
  }

}
