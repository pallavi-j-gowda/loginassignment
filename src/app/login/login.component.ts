import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { User } from "../register/register.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('Input')input:ElementRef;
  @Output() logindetails=new EventEmitter()
  username: string;
  email: string;
  password: string;
  constructor(private router: Router) {
  
    
  }

  user:User
  ngOnInit(): void {
   
    
    this.user={
      username: '',
    email:'',
    password:''
    }
  }
  errormsg:string;

onsubmit(username,password){
  username=this.user.username,
password=this.user.password
  let localData=JSON.parse(localStorage.getItem('form-data'));
  if (username!=localData.username || password!=localData.password) {
    this.errormsg="invalid user name or password"
  }
  if (username==localData.username && password==localData.password) {
    this.router.navigate(['/loginDetails']);
  }
}
}
