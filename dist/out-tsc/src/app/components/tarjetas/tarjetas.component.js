import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TarjetasComponent.prototype, "items", void 0);
    TarjetasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-tarjetas',
            templateUrl: './tarjetas.component.html',
            styleUrls: ['./tarjetas.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TarjetasComponent);
    return TarjetasComponent;
}());
export { TarjetasComponent };
//# sourceMappingURL=tarjetas.component.js.map