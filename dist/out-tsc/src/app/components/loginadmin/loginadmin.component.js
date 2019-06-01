import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
var LoginadminComponent = /** @class */ (function () {
    function LoginadminComponent(loginService) {
        this.loginService = loginService;
    }
    LoginadminComponent.prototype.ngOnInit = function () {
    };
    LoginadminComponent.prototype.login = function () {
        this.loginService.hacerLoginAdmin();
    };
    LoginadminComponent = tslib_1.__decorate([
        Component({
            selector: 'app-loginadmin',
            templateUrl: './loginadmin.component.html',
            styleUrls: ['./loginadmin.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService])
    ], LoginadminComponent);
    return LoginadminComponent;
}());
export { LoginadminComponent };
//# sourceMappingURL=loginadmin.component.js.map