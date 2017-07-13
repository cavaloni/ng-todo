import { CropperDrawSettings } from './cropperDrawSettings';
export interface ICropperSettings {
    canvasWidth?: number;
    canvasHeight?: number;
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    minWithRelativeToResolution?: boolean;
    croppedWidth?: number;
    croppedHeight?: number;
    touchRadius?: number;
    cropperDrawSettings?: any;
    noFileInput?: boolean;
    allowedFilesRegex?: RegExp;
    rounded: boolean;
    keepAspect: boolean;
    preserveSize: boolean;
    compressRatio: number;
}
export declare class CropperSettings implements ICropperSettings {
    canvasWidth: number;
    canvasHeight: number;
    dynamicSizing: boolean;
    cropperClass: string;
    croppingClass: string;
    width: number;
    height: number;
    minWidth: number;
    minHeight: number;
    minWithRelativeToResolution: boolean;
    croppedWidth: number;
    croppedHeight: number;
    cropperDrawSettings: CropperDrawSettings;
    touchRadius: number;
    noFileInput: boolean;
    fileType: string;
    resampleFn: Function;
    allowedFilesRegex: RegExp;
    preserveSize: boolean;
    compressRatio: number;
    private _rounded;
    private _keepAspect;
    constructor();
    rounded: boolean;
    keepAspect: boolean;
}
