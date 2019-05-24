import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(spotify) {
        var _this = this;
        this.spotify = spotify;
        this.nuevasCanciones = [];
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
        });
    }
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [SpotifyService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map