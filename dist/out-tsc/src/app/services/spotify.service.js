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
        // console.log('Spotify Service Listo');
    }
    // Para  consulta generica
    SpotifyService.prototype.getQuery = function (query) {
        var url = "https://api.spotify.com/v1/" + query;
        //Pipe transformacion de Datos
        // Defino Headers que API de Spotify Necesita
        var headers = new HttpHeaders({
            Authorization: "Bearer BQBPk5bH8gLgaPTVQ8j7EmiysYlMMWlcBuWq03eKwJYE1_Ia8N6Pr0_QfOe1XkwiDsVb3pNVi375GNR1bVE"
        });
        return this.http.get(url, { headers: headers });
    };
    //Cuando API Spotify envia la respuesta envia demasiada informacion y MAP
    //simplemente me filtra lo que a mi me sirve
    SpotifyService.prototype.getNewReleases = function () {
        return this.getQuery("browse/new-releases?limit=20").pipe(map(function (data) { return data["albums"].items; }));
    };
    // Referente al Search
    SpotifyService.prototype.getArtistas = function (termino) {
        return this.getQuery("search?q=" + termino + "&type=artist&limit=15").pipe(map(function (data) { return data["artists"].items; }));
    };
    SpotifyService.prototype.getArtista = function (id) {
        return this.getQuery("artists/" + id);
        // .pipe( map( data => data['artists'].items));
    };
    SpotifyService.prototype.getTopTracks = function (id) {
        return this.getQuery("artists/" + id + "/top-tracks?country=us").pipe(map(function (data) { return data["tracks"]; }));
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