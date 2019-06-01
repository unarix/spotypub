import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
var SetokenComponent = /** @class */ (function () {
    function SetokenComponent(http, spotify, router) {
        this.http = http;
        this.spotify = spotify;
        this.router = router;
    }
    SetokenComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var keyValuePairs, values, valorFinal;
            return tslib_1.__generator(this, function (_a) {
                keyValuePairs = window.location.toString();
                console.log("return: ");
                console.log(keyValuePairs);
                if (keyValuePairs.includes('=')) {
                    values = keyValuePairs.split('=');
                    console.log(values);
                    valorFinal = values[1].split('&');
                    console.log(valorFinal);
                    this.postToken(valorFinal[0]);
                    localStorage.setItem('tokenAdmin', valorFinal[0]);
                    this.spotify.getAdminToken();
                }
                setTimeout(function () {
                    //this.router.navigate(['/search']);
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    SetokenComponent.prototype.postToken = function (query) {
        console.log("Enviando token a la api: " + query);
        var url = "https://a2klab.azurewebsites.net/api/Spotify?token=" + query;
        console.log("URL: " + url);
        var headers = new Headers();
        headers.append('accept', 'application/json');
        return this.http.post(url, { headers: headers }).subscribe(function (val) {
            console.log("seteado: " + val);
        }, function (error) {
            console.log("ERROR AL SETEAR TOKEN", error);
        });
    };
    SetokenComponent = tslib_1.__decorate([
        Component({
            selector: 'app-setoken',
            templateUrl: './setoken.component.html',
            styleUrls: ['./setoken.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, SpotifyService, Router])
    ], SetokenComponent);
    return SetokenComponent;
}());
export { SetokenComponent };
//# sourceMappingURL=setoken.component.js.map