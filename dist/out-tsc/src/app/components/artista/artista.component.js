import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
var ArtistaComponent = /** @class */ (function () {
    function ArtistaComponent(router, spotify) {
        var _this = this;
        this.router = router;
        this.spotify = spotify;
        this.artista = {};
        this.topTracks = [];
        this.loadingArtist = true;
        this.router.params.subscribe(function (params) {
            _this.getArtista(params['id']);
            _this.getTopTracks(params['id']);
        });
    }
    ArtistaComponent.prototype.getArtista = function (id) {
        var _this = this;
        this.loadingArtist = true;
        this.spotify.getArtista(id)
            .subscribe(function (artista) {
            console.log(artista);
            _this.artista = artista;
            _this.loadingArtist = false;
        });
    };
    ArtistaComponent.prototype.getTopTracks = function (id) {
        var _this = this;
        this.spotify.getTopTracks(id)
            .subscribe(function (topTracks) {
            console.log(topTracks);
            _this.topTracks = topTracks;
        });
    };
    ArtistaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-artista',
            templateUrl: './artista.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            SpotifyService])
    ], ArtistaComponent);
    return ArtistaComponent;
}());
export { ArtistaComponent };
//# sourceMappingURL=artista.component.js.map