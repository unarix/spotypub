import * as tslib_1 from "tslib";
import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(renderer, router) {
        this.renderer = renderer;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.hideNavbar = function (componente) {
        console.log("colapse!");
        this.router.navigate(['/' + componente]);
        //this.renderer.addClass(this.myNavbar.nativeElement, "collapse");
        //this.renderer.addClass(this.myNavbar.nativeElement, "fadeOut");
        //this.renderer.removeClass(this.myNavbar.nativeElement, "show");
    };
    tslib_1.__decorate([
        ViewChild("myNavbar"),
        tslib_1.__metadata("design:type", ElementRef)
    ], NavbarComponent.prototype, "myNavbar", void 0);
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2, Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map