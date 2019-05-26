import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//importar map reactive extentions
import { map } from "rxjs/operators";

// Por lo general cuando se trabaja con API
// Es necesario Centralizar la Informacion por eso este Service

// Este servicio se va a poder Inyectar en otros Componentes
@Injectable({
  providedIn: "root"
})
export class SpotifyService {

  accessToken: any = localStorage.getItem('token');
  playListToken: any = localStorage.getItem('tokenAdmin');
  tokenType: string;

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
    console.log(localStorage.getItem('token'));
  }

  // Para  consulta generica
  getAdminToken() : any {
    console.log("Obteniendo Token...");
    var tok = "";
    const url = 'https://a2klab.azurewebsites.net/api/spotify'
    const options = {
      headers: new HttpHeaders({
        'accept':  'application/json'        
        })
      };
    this.http.get(url,options).subscribe(
      (val) => {
          console.log("obtenido " + val.toString());
          console.log("obtenido tostring: " + val.toString());
          localStorage.setItem('tokenAdmin', val.toString());
          this.playListToken = localStorage.getItem('tokenAdmin');
          return val;
      },
      response => {
          console.log("ERROR AL OBTENER TOKEN", response);
      });
  }

  // Para  consulta generica
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    //Pipe transformacion de Datos
    // Defino Headers que API de Spotify Necesita
    const headers = new HttpHeaders({
      Authorization:
        "Bearer " + this.accessToken
    });

    return this.http.get(url, { headers });
  }


  postQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
      "Bearer " + this.accessToken
    });
    
    return this.http.post(url, { headers });

  }

  //Cuando API Spotify envia la respuesta envia demasiada informacion y MAP
  //simplemente me filtra lo que a mi me sirve

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }

  // Referente al Search

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}*&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe( map( data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }

  setNextTrack(id: string) {
    const url = `https://api.spotify.com/v1/playlists/7bbQjBOgCCaTmZxhQXKRwU/tracks?uris=spotify%3Atrack%3A`+ id;

    const options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + this.playListToken,
        'Content-Type':  'application/x-www-form-urlencoded;'        
        })
      };

    let body = 'grant_type=client_credentials';

    return this.http.post(url, body, options);
  }

}
