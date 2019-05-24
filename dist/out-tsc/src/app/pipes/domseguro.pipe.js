import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var DomseguroPipe = /** @class */ (function () {
    function DomseguroPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    DomseguroPipe.prototype.transform = function (value) {
        var url = 'https://open.spotify.com/embed?uri=';
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    };
    DomseguroPipe = tslib_1.__decorate([
        Pipe({
            name: 'domseguro'
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], DomseguroPipe);
    return DomseguroPipe;
}());
export { DomseguroPipe };
//# sourceMappingURL=domseguro.pipe.js.map