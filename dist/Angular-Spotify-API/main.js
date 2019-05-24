(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<main role=\"main\">\n    <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_artista_artista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/artista/artista.component */ "./src/app/components/artista/artista.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/noimage.pipe */ "./src/app/pipes/noimage.pipe.ts");
/* harmony import */ var _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/domseguro.pipe */ "./src/app/pipes/domseguro.pipe.ts");
/* harmony import */ var _components_tarjetas_tarjetas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tarjetas/tarjetas.component */ "./src/app/components/tarjetas/tarjetas.component.ts");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shared/loading/loading.component */ "./src/app/components/shared/loading/loading.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");










// Importar rutas

// Pipes





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_artista_artista_component__WEBPACK_IMPORTED_MODULE_8__["ArtistaComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_11__["NoimagePipe"],
                _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_12__["DomseguroPipe"],
                _components_tarjetas_tarjetas_component__WEBPACK_IMPORTED_MODULE_13__["TarjetasComponent"],
                _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                // RouterModule.forRoot( ROUTES, { useHash: true } )
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_artista_artista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/artista/artista.component */ "./src/app/components/artista/artista.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");




var ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'artist/:id', component: _components_artista_artista_component__WEBPACK_IMPORTED_MODULE_2__["ArtistaComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


/***/ }),

/***/ "./src/app/components/artista/artista.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/artista/artista.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loadingArtist\"></app-loading>\n\n<div class=\"container\">\n\n  <div style=\"padding:1em;\"  class=\"media animated fadeIn list-inline align-items-center\" *ngIf=\"!loadingArtist\">\n    <img [src]=\"artista.images | noimage\" class=\"img-circle\" style=\"width: 5em;\"/>\n    <div class=\"media-body\" style=\"padding: 2em;\">\n      <h3 class=\"mt-0\">{{ artista.name }}</h3>\n      <a [href]=\"artista.external_urls.spotify\" target=\"_blank\">\n          Popularidad: {{ artista.popularity }}\n        </a>\n    </div>\n  </div>\n\n  <ul class=\"list-unstyled list-inline \">\n    <li style=\"padding-top: 0.5em\" class=\"media list-inline-item align-items-center\" *ngFor=\"let track of topTracks\">\n      <img [src]=\"track.album.images | noimage\" class=\"mr-3 img-circle\" style=\"width: 3em;\" alt=\"...\">\n      <div class=\"media-body\">\n        <h5 class=\"mt-0 mb-1\">{{ track.name }}</h5>\n        <p>{{ track.album.name }}</p>\n\n        <!--iframe [src]=\"track.uri | domseguro\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"> \n\n        </iframe-->\n      </div>\n      <span (click)=\"setNextTrack(track.id)\" class=\"fa fa-step-forward fa-1x\" aria-hidden=\"true\"></span>\n    </li>\n  </ul>\n</div>\n\n<div *ngIf=\"exito\" role=\"alert\" class=\"alertpos alert alert-success animated fadeIn\" >\n  <strong>Listo!</strong>\n  <button type=\"button\" class=\"close\" (click)=\"exito=false\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <p>\n      {{ mensaje }}\n  </p>\n</div>\n\n<div *ngIf=\"error\" role=\"alert\" class=\"alertpos alert alert-danger animated fadeIn\" >\n  <strong>Error</strong>\n  <button type=\"button\" class=\"close\" (click)=\"error=false\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <p>\n      {{ mensaje }}\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/artista/artista.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/artista/artista.component.ts ***!
  \*********************************************************/
/*! exports provided: ArtistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistaComponent", function() { return ArtistaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");




var ArtistaComponent = /** @class */ (function () {
    function ArtistaComponent(router, spotify) {
        var _this = this;
        this.router = router;
        this.spotify = spotify;
        this.artista = {};
        this.topTracks = [];
        this.loadingArtist = true;
        this.router.params.subscribe(function (params) {
            _this.spotify.getToken();
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
    ArtistaComponent.prototype.setNextTrack = function (id) {
        var _this = this;
        console.log("paso con id: " + id);
        this.spotify.setNextTrack(id).subscribe(function (val) {
            console.log(val);
            _this.exito = true;
            _this.mensaje = "Tu cancion ya esta en la lista de reproduccion!";
        }, function (response) {
            console.log("ERROR EN LA RESPUESTA", response);
            _this.error = true;
            _this.mensaje = "Token invalido";
        }, function () {
            console.log("llamada completa...");
        });
    };
    ArtistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artista',
            template: __webpack_require__(/*! ./artista.component.html */ "./src/app/components/artista/artista.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"]])
    ], ArtistaComponent);
    return ArtistaComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading\"></app-loading>\n\n<div class=\"container\">\n        <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n            <h3><br></h3>\n            <h1><span style=\"color:gray\">recomenda</span>dos</h1>\n        </div>\n</div>\n\n<div *ngIf=\"error\" class=\"alert alert-danger animated fadeIn\">\n    <h3>Error</h3>\n    <p>\n        {{ mensajeError }}\n    </p>\n</div>\n\n\n\n<app-tarjetas [items]=\"nuevasCanciones\"></app-tarjetas>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(spotify, router) {
        this.spotify = spotify;
        this.router = router;
        this.nuevasCanciones = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var keyValuePairs, values, valorFinal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                keyValuePairs = window.location.toString();
                console.log("return: ");
                console.log(keyValuePairs);
                if (keyValuePairs.includes('=')) {
                    values = keyValuePairs.split('=');
                    console.log(values);
                    valorFinal = values[1].split('&');
                    console.log(valorFinal);
                    localStorage.setItem('token', valorFinal[0]);
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
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n      <h3><br></h3>\n      <!--h1>Log<span style=\"color:gray\">in</span><span style=\"color:#33FF5B\">Spotify</span></h1-->\n      <img style=\"width:150px;\" src=\"https://musicodiy.com/wp-content/uploads/2018/07/Spotify_Logo_feature.png\"/>\n      <p *ngIf=\"!logueado\">Para usar SpotyPub debes tener una cuenta de spotify. En caso que ya la tengas, solo debes loguearte y otorgar los permisos!<p>\n      <p *ngIf=\"logueado\">Perfecto, ya estas logueado en spotify!<p>\n      <button *ngIf=\"!logueado\" type=\"button\" class=\"btn btn-success\" (click)=\"login()\">Login</button>\n  </div>\n  \n  <app-loading class=\"m-5\" *ngIf=\"loading\"></app-loading>\n  \n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/components/login/login.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') == "")
            this.logueado = false;
        else
            this.logueado = true;
    };
    LoginComponent.prototype.login = function () {
        this.loginService.hacerLogin();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.service.ts":
/*!***************************************************!*\
  !*** ./src/app/components/login/login.service.ts ***!
  \***************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoginService = /** @class */ (function () {
    function LoginService(router) {
        this.router = router;
        this.CLIENT_ID = '318fa35ac32b4b92b19611cc41709790';
        this.REDIRECT_URI = 'http://localhost:4200/home';
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
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n    <h3><br></h3>\n    <h1><span style=\"color:gray\">suma</span>tracks</h1>\n    <p>Busca un artista... de los resultados elegi una cancion y agregala a la playlist del bar.</p>\n    <p><br></p>\n    <p class=\"lead text-muted\">\n        <input #termino type=\"text\" (keyup)=\"buscar(termino.value)\" class=\"form-control\" placeholder=\"Buscar artista...\">\n    </p>\n</div>\n\n<app-loading class=\"m-5\" *ngIf=\"loading\"></app-loading>\n<app-tarjetas *ngIf=\"!loading\" [items]=\"artistas\"></app-tarjetas>\n\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(spotify) {
        this.spotify = spotify;
        this.artistas = [];
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
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center animated fadeIn\">\n    <div class=\"col\">\n\n        <i class=\"fa fa-sync fa-spin fa-5x\"></i>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/shared/loading/loading.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n        <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-8 col-md-7 py-4\">\n            <ul class=\"list-unstyled\">\n                <li><a href=\"/\" class=\"text-white\" routerLink=\"login\" >Login</a></li>\n                <li><a href=\"/\" class=\"text-white\" routerLink=\"home\" >Recomendados</a></li>\n                <li><a href=\"/\" class=\"text-white\" routerLink=\"search\" >Suma un track</a></li>\n            </ul>\n            </div>\n        </div>\n        </div>\n    </div>\n    <div class=\"navbar navbar-dark bg-dark box-shadow\">\n        <div class=\"container d-flex justify-content-between\">\n        <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\n            <span class=\"fa fa-headphones\" style=\"padding-right:0.5em ;\"></span>\n            <strong>#spotyPub</strong>\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        </div>\n    </div>\n    </header>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/tarjetas/tarjetas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/tarjetas/tarjetas.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFyamV0YXMvdGFyamV0YXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tarjetas/tarjetas.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/tarjetas/tarjetas.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-5 animated fadeIn card-columns\">\n    <div (click)=\"verArtista( item )\" *ngFor=\"let item of items\" class=\"card puntero\">\n        <img class=\"card-img-top\" [src]=\"item.images | noimage\">\n        <div class=\"card-body\">\n            <p class=\"card-title\">{{ item.name }}</p>\n            <!--h6 class=\"card-title\">{{ item.name }}</h6-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tarjetas/tarjetas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tarjetas/tarjetas.component.ts ***!
  \***********************************************************/
/*! exports provided: TarjetasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetasComponent", function() { return TarjetasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TarjetasComponent = /** @class */ (function () {
    function TarjetasComponent(router) {
        this.router = router;
        this.items = [];
    }
    TarjetasComponent.prototype.verArtista = function (item) {
        var artistaId;
        if (item.type === 'artist') {
            artistaId = item.id;
        }
        else {
            artistaId = item.artists[0].id;
        }
        this.router.navigate(['/artist', artistaId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TarjetasComponent.prototype, "items", void 0);
    TarjetasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tarjetas',
            template: __webpack_require__(/*! ./tarjetas.component.html */ "./src/app/components/tarjetas/tarjetas.component.html"),
            styles: [__webpack_require__(/*! ./tarjetas.component.css */ "./src/app/components/tarjetas/tarjetas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TarjetasComponent);
    return TarjetasComponent;
}());



/***/ }),

/***/ "./src/app/pipes/domseguro.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/domseguro.pipe.ts ***!
  \*****************************************/
/*! exports provided: DomseguroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomseguroPipe", function() { return DomseguroPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var DomseguroPipe = /** @class */ (function () {
    function DomseguroPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    DomseguroPipe.prototype.transform = function (value) {
        var url = 'https://open.spotify.com/embed?uri=';
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    };
    DomseguroPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'domseguro'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DomseguroPipe);
    return DomseguroPipe;
}());



/***/ }),

/***/ "./src/app/pipes/noimage.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/noimage.pipe.ts ***!
  \***************************************/
/*! exports provided: NoimagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoimagePipe", function() { return NoimagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoimagePipe = /** @class */ (function () {
    function NoimagePipe() {
    }
    NoimagePipe.prototype.transform = function (images) {
        if (!images) {
            return 'assets/img/noimage.png';
        }
        if (images.length > 0) {
            return images[0].url;
        }
        else {
            return 'assets/img/noimage.png';
        }
    };
    NoimagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'noimage'
        })
    ], NoimagePipe);
    return NoimagePipe;
}());



/***/ }),

/***/ "./src/app/services/spotify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



//importar map reactive extentions

// Por lo general cuando se trabaja con API
// Es necesario Centralizar la Informacion por eso este Service
// Este servicio se va a poder Inyectar en otros Componentes
var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        this.accessToken = localStorage.getItem('token'); //'BQD4jT-tLupMrnZLRDGNUF1uEiS43zYyAuyOUPh_Y8L37_m025uvZ5rakXGVJeKuOHFY4E5L5b1g2aUt_qQ';
        console.log('Spotify Service Listo');
        console.log(localStorage.getItem('token'));
    }
    // Para  consulta generica
    SpotifyService.prototype.getToken = function () {
        // console.log("Obteniendo Token...");
        // var tok = "";
        // const url = 'https://a2klab.azurewebsites.net/api/spotify'
        // const options = {
        //   headers: new HttpHeaders({
        //     'accept':  'application/json'        
        //     })
        //   };
        // this.http.get(url,options).subscribe(
        //   (val) => {
        //       console.log("obtenido " + val);
        //       this.accessToken = val;
        //       return val;
        //   },
        //   response => {
        //       console.log("ERROR AL OBTENER TOKEN", response);
        //   });
    };
    // Para  consulta generica
    SpotifyService.prototype.getQuery = function (query) {
        var url = "https://api.spotify.com/v1/" + query;
        //Pipe transformacion de Datos
        // Defino Headers que API de Spotify Necesita
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer " + this.accessToken
        });
        return this.http.get(url, { headers: headers });
    };
    SpotifyService.prototype.postQuery = function (query) {
        var url = "https://api.spotify.com/v1/" + query;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer " + this.accessToken
        });
        return this.http.post(url, { headers: headers });
    };
    //Cuando API Spotify envia la respuesta envia demasiada informacion y MAP
    //simplemente me filtra lo que a mi me sirve
    SpotifyService.prototype.getNewReleases = function () {
        return this.getQuery("browse/new-releases?limit=20").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data["albums"].items; }));
    };
    // Referente al Search
    SpotifyService.prototype.getArtistas = function (termino) {
        return this.getQuery("search?q=" + termino + "*&type=artist&limit=15").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data["artists"].items; }));
    };
    SpotifyService.prototype.getArtista = function (id) {
        return this.getQuery("artists/" + id);
        // .pipe( map( data => data['artists'].items));
    };
    SpotifyService.prototype.getTopTracks = function (id) {
        return this.getQuery("artists/" + id + "/top-tracks?country=us").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data["tracks"]; }));
    };
    SpotifyService.prototype.setNextTrack = function (id) {
        var url = "https://api.spotify.com/v1/playlists/7bbQjBOgCCaTmZxhQXKRwU/tracks?uris=spotify%3Atrack%3A" + id;
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': "Bearer " + this.accessToken,
                'Content-Type': 'application/x-www-form-urlencoded;'
            })
        };
        var body = 'grant_type=client_credentials';
        return this.http.post(url, body, options);
    };
    SpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpotifyService);
    return SpotifyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/unarix/Documentos/code/spotypub/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map