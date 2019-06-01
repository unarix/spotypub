import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(spotify, router) {
        this.spotify = spotify;
        this.router = router;
        this.nuevasCanciones = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var keyValuePairs, values, valorFinal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                keyValuePairs = window.location.toString();
                console.log("return: ");
                console.log(keyValuePairs);
                if (keyValuePairs.includes('=')) {
                    values = keyValuePairs.split('=');
                    console.log(values);
                    valorFinal = values[1].split('&');
                    console.log(valorFinal);
                    localStorage.setItem('token', valorFinal[0]);
                    localStorage.setItem('logOk', 'true');
                    this.spotify.getAdminToken();
                }
                setTimeout(function () {
                    //this.router.navigate(['/search']);
                }, 1000);
                this.loading = true;
                this.error = false;
                // En esta seccion se hace la peticion GET
                // Es necesario subscribirse cuando se ejecuta es decir estar escuchando los cambios
                // que este servicio puede regresar
                //La data es lo que regresa el servicio
                this.spotify.getNewReleases()
                    .subscribe(function (data) {
                    console.log(data);
                    _this.nuevasCanciones = data;
                    _this.loading = false;
                }, function (errorServicio) {
                    _this.loading = false;
                    _this.error = true;
                    console.log(errorServicio);
                    _this.mensajeError = errorServicio.error.error.message;
                    localStorage.setItem('logOk', 'false');
                    _this.router.navigate(['/login']);
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [SpotifyService, Router])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map