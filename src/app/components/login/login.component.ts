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
    if(localStorage.getItem('token') == "")
      this.logueado = false;
    else
      this.logueado = true;
  }

  login() {
    this.loginService.hacerLogin();
  }

}
