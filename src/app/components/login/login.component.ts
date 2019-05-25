import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logueado: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log(localStorage.getItem('logOk'));
    if(localStorage.getItem('logOk') == "true")
      this.logueado = true;
    else
      this.logueado = false;
  }

  login() {
    this.loginService.hacerLogin();
  }

}
