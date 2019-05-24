import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
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
    NoimagePipe = tslib_1.__decorate([
        Pipe({
            name: 'noimage'
        })
    ], NoimagePipe);
    return NoimagePipe;
}());
export { NoimagePipe };
//# sourceMappingURL=noimage.pipe.js.map