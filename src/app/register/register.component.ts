import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface User{
    username:string,
  email:string,
  password:string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  constructor(private router: Router) { }
  
  user:User
  ngOnInit(): void {
    
    this.user={
      username: '',
    email:'',
    password:''
    }
  }
  errormsg:string;
  onsubmit(){
    if (this.user.username=='') {
       this.errormsg="enter your  name"
    }
    if (this.user.email=='') {
      this. errormsg="enter your email"
    }
    if (this.user.password=='') {
      this.errormsg="enter the password"
    }
    if (this.user.username=='' && this.user.email=='' && this.user.password=='') {
      this.errormsg="enter your details"
    }
    if (this.user.username!='' && this.user.email!='' && this.user.password!='') {
      this.router.navigate(['/login']);
    }
    
    localStorage.setItem('form-data', JSON.stringify(this.user)); 
  }
  
}

