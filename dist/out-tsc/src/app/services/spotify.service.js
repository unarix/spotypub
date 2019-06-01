import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//importar map reactive extentions
import { map } from "rxjs/operators";
// Por lo general cuando se trabaja con API
// Es necesario Centralizar la Informacion por eso este Service
// Este servicio se va a poder Inyectar en otros Componentes
var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        this.accessToken = localStorage.getItem('token');
        this.playListToken = localStorage.getItem('tokenAdmin');
        console.log('Spotify Service Listo');
        console.log(localStorage.getItem('token'));
    }
    // Para  consulta generica
    SpotifyService.prototype.getAdminToken = function () {
        var _this = this;
        console.log("Obteniendo Token...");
        var tok = "";
        var url = 'https://a2klab.azurewebsites.net/api/spotify';
        var options = {
            headers: new HttpHeaders({
                'accept': 'application/json'
            })
        };
        return this.http.get(url, options).subscribe(function (val) {
            console.log("obtenido " + val.toString());
            console.log("obtenido tostring: " + val.toString());
            localStorage.setItem('tokenAdmin', val.toString());
            _this.playListToken = localStorage.getItem('tokenAdmin');
        }, function (response) {
            console.log("ERROR AL OBTENER TOKEN", response);
        });
    };
    // Para  consulta generica
    SpotifyService.prototype.getQuery = function (query) {
        var url = "https://api.spotify.com/v1/" + query;
        //Pipe transformacion de Datos
        // Defino Headers que API de Spotify Necesita
        var headers = new HttpHeaders({
            Authorization: "Bearer " + this.accessToken
        });
        return this.http.get(url, { headers: headers });
    };
    SpotifyService.prototype.postQuery = function (query) {
        var url = "https://api.spotify.com/v1/" + query;
        var headers = new HttpHeaders({
            Authorization: "Bearer " + this.accessToken
        });
        return this.http.post(url, { headers: headers });
    };
    //Cuando API Spotify envia la respuesta envia demasiada informacion y MAP
    //simplemente me filtra lo que a mi me sirve
    SpotifyService.prototype.getNewReleases = function () {
        return this.getQuery("browse/new-releases?limit=20").pipe(map(function (data) { return data["albums"].items; }));
    };
    // Referente al Search
    SpotifyService.prototype.getArtistas = function (termino) {
        return this.getQuery("search?q=" + termino + "*&type=artist&limit=15").pipe(map(function (data) { return data["artists"].items; }));
    };
    SpotifyService.prototype.getPlaylist = function (termino) {
        return this.getQuery("playlists/" + termino).pipe(map(function (data) { return data["playlist"].items; }));
    };
    SpotifyService.prototype.getArtista = function (id) {
        return this.getQuery("artists/" + id);
        // .pipe( map( data => data['artists'].items));
    };
    SpotifyService.prototype.getTopTracks = function (id) {
        return this.getQuery("artists/" + id + "/top-tracks?country=us").pipe(map(function (data) { return data["tracks"]; }));
    };
    SpotifyService.prototype.setNextTrack = function (id) {
        var url = "https://api.spotify.com/v1/playlists/7bbQjBOgCCaTmZxhQXKRwU/tracks?uris=spotify%3Atrack%3A" + id;
        var options = {
            headers: new HttpHeaders({
                'Authorization': "Bearer " + this.playListToken,
                'Content-Type': 'application/x-www-form-urlencoded;'
            })
        };
        var body = 'grant_type=client_credentials';
        return this.http.post(url, body, options);
    };
    SpotifyService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SpotifyService);
    return SpotifyService;
}());
export { SpotifyService };
//# sourceMappingURL=spotify.service.js.map