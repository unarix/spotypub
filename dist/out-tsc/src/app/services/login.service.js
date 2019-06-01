import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
var LoginService = /** @class */ (function () {
    //REDIRECT_URI = 'https://spotypub.azurewebsites.net/home';
    //REDIRECT_URI_ADMIN = 'https://spotypub.azurewebsites.net/setoken';
    function LoginService(router) {
        this.router = router;
        this.CLIENT_ID = '318fa35ac32b4b92b19611cc41709790';
        this.REDIRECT_URI = 'http://localhost:4200/home';
        this.REDIRECT_URI_ADMIN = 'http://localhost:4200/setoken';
    }
    LoginService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    LoginService.prototype.isAuthenticated = function () {
        return this.getToken();
    };
    LoginService.prototype.hacerLogin = function () {
        var scopes = 'user-read-private user-read-email user-library-read user-top-read user-follow-read user-read-playback-state user-modify-playback-state user-read-birthdate playlist-read-private user-library-modify playlist-read-collaborative user-follow-modify user-read-currently-playing user-read-recently-played playlist-modify-public playlist-modify-private';
        window.location.href = ('https://accounts.spotify.com/authorize/?'
            + 'client_id=' + this.CLIENT_ID
            + '&response_type=token'
            + '&redirect_uri=' + this.REDIRECT_URI
            + '&scope=' + scopes);
    };
    LoginService.prototype.hacerLoginAdmin = function () {
        var scopes = 'user-read-private user-read-email user-library-read user-top-read user-follow-read user-read-playback-state user-modify-playback-state user-read-birthdate playlist-read-private user-library-modify playlist-read-collaborative user-follow-modify user-read-currently-playing user-read-recently-played playlist-modify-public playlist-modify-private';
        window.location.href = ('https://accounts.spotify.com/authorize/?'
            + 'client_id=' + this.CLIENT_ID
            + '&response_type=token'
            + '&redirect_uri=' + this.REDIRECT_URI_ADMIN
            + '&scope=' + scopes);
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map