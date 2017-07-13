import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropperComponent } from './imageCropperComponent';
var ImageCropperModule = (function () {
    function ImageCropperModule() {
    }
    return ImageCropperModule;
}());
export { ImageCropperModule };
ImageCropperModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ImageCropperComponent],
                exports: [ImageCropperComponent]
            },] },
];
/** @nocollapse */
ImageCropperModule.ctorParameters = function () { return []; };
//# sourceMappingURL=imageCropperModule.js.map