import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('logOk'));
        if (localStorage.getItem('logOk') == "true")
            this.logueado = true;
        else
            this.logueado = false;
    };
    LoginComponent.prototype.login = function () {
        this.loginService.hacerLogin();
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map