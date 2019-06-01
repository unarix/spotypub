import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(spotify, router) {
        var _this = this;
        this.spotify = spotify;
        this.router = router;
        this.artistas = [];
        //La data es lo que regresa el servicio
        this.spotify.getNewReleases()
            .subscribe(function (data) {
            console.log(data);
        }, function (errorServicio) {
            localStorage.setItem('logOk', 'false');
            _this.router.navigate(['/login']);
        });
    }
    SearchComponent.prototype.buscar = function (termino) {
        var _this = this;
        console.log(termino);
        this.loading = true;
        this.spotify.getArtistas(termino)
            .subscribe(function (data) {
            console.log(data);
            _this.artistas = data;
            _this.loading = false;
        });
    };
    SearchComponent = tslib_1.__decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [SpotifyService, Router])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
//# sourceMappingURL=search.component.js.map