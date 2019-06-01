import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent(elementRef) {
        this.elementRef = elementRef;
        this.title = 'app';
    }
    AppComponent.prototype.onClick = function (event) {
        // var clickover = $(event.target);
        // var _opened = $navbar.hasClass("in");
        // if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        //     $navbar.collapse('hide');
        // }
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
            // host: {
            //   '(document:click)': 'onClick($event)',
            // },
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map