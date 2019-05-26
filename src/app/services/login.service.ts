import { Router } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  CLIENT_ID = '318fa35ac32b4b92b19611cc41709790';
  REDIRECT_URI = 'http://localhost:4200/home';
  REDIRECT_URI_ADMIN = 'http://localhost:4200/setoken';
  //REDIRECT_URI = 'https://spotypub.azurewebsites.net/home';
  //REDIRECT_URI = 'https://spotypub.azurewebsites.net';

  constructor(private router: Router) { }

  getToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated() {
    return this.getToken();
  }

  hacerLogin() {
    const scopes = 'user-read-private user-read-email user-library-read user-top-read user-follow-read user-read-playback-state user-modify-playback-state user-read-birthdate playlist-read-private user-library-modify playlist-read-collaborative user-follow-modify user-read-currently-playing user-read-recently-played playlist-modify-public playlist-modify-private';
    window.location.href = ('https://accounts.spotify.com/authorize/?'
      + 'client_id=' + this.CLIENT_ID
      + '&response_type=token'
      + '&redirect_uri=' + this.REDIRECT_URI
      + '&scope=' + scopes);
  }

  hacerLoginAdmin() {
    const scopes = 'user-read-private user-read-email user-library-read user-top-read user-follow-read user-read-playback-state user-modify-playback-state user-read-birthdate playlist-read-private user-library-modify playlist-read-collaborative user-follow-modify user-read-currently-playing user-read-recently-played playlist-modify-public playlist-modify-private';
    window.location.href = ('https://accounts.spotify.com/authorize/?'
      + 'client_id=' + this.CLIENT_ID
      + '&response_type=token'
      + '&redirect_uri=' + this.REDIRECT_URI_ADMIN
      + '&scope=' + scopes);
  }

}
