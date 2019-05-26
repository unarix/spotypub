import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-setoken',
  templateUrl: './setoken.component.html',
  styleUrls: ['./setoken.component.css']
})
export class SetokenComponent implements OnInit {

  constructor( private http: HttpClient, private spotify: SpotifyService, private router: Router ) {
  }

  async ngOnInit() {
    //await this.spotify.getToken();
    
    const keyValuePairs = window.location.toString();
    console.log("return: " );
    console.log(keyValuePairs);
    if (keyValuePairs.includes('=')) {
      const values = keyValuePairs.split('=');
      console.log(values);
      const valorFinal = values[1].split('&');
      console.log(valorFinal);
      this.postToken(valorFinal[0]);
      localStorage.setItem('tokenAdmin', valorFinal[0]);
      this.spotify.getAdminToken();
    }
    setTimeout(() => {
      //this.router.navigate(['/search']);
    }, 1000);
  }


  postToken(query: string) {
    console.log("Enviando token a la api: " + query );
    const url = `https://a2klab.azurewebsites.net/api/Spotify?token=${query}`;
    console.log("URL: " + url );
    var headers = new Headers();
    headers.append('accept', 'application/json');
    return this.http.post(url, { headers: headers}).subscribe(
      (val) => {
          console.log("seteado: " + val);
      },
      error => {
          console.log("ERROR AL SETEAR TOKEN", error);
      });
  }

}
