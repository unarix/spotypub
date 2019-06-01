import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
var PlaypubComponent = /** @class */ (function () {
    function PlaypubComponent(router, spotify) {
        this.router = router;
        this.spotify = spotify;
        this.playlist = [];
        this.loading = false;
        //this.router.params.subscribe( params => { });
    }
    PlaypubComponent.prototype.ngOnInit = function () {
        this.getPlaylist("7bbQjBOgCCaTmZxhQXKRwU");
    };
    PlaypubComponent.prototype.getPlaylist = function (id) {
        var _this = this;
        this.loading = true;
        this.spotify.getPlaylist(id)
            .subscribe(function (playlist) {
            console.log(playlist);
            _this.playlist = playlist;
            _this.loading = false;
        });
    };
    PlaypubComponent = tslib_1.__decorate([
        Component({
            selector: 'app-playpub',
            templateUrl: './playpub.component.html',
            styleUrls: ['./playpub.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, SpotifyService])
    ], PlaypubComponent);
    return PlaypubComponent;
}());
export { PlaypubComponent };
//# sourceMappingURL=playpub.component.js.map