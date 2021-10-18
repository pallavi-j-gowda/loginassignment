import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from "../register/register.component";

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {

   
  @Output() logindetails=new EventEmitter()
  username: string;
  email: string;
  password: string;
  constructor() { }

  user:User
  ngOnInit(): void {
    let localData=JSON.parse(localStorage.getItem('form-data'));

    this.user={
      username: localData.username ,
    email:localData.email,
    password:localData.password
    }
  }
}
