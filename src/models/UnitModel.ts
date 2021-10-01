import unit_config from '../../configs/unit-config-new.json';
import staticUnit_config from '../../configs/staticUnit-config.json';
import { ObjectType } from '../enums/ObjectTypeEnums';
import unitMatrix from '../rasterworks/unit-matrix.json';
import objectMatrix from '../rasterworks/object-matrix.json';
export default class UnitModel {
    private matrix: any;
    public animationFrames: any;
    public objectType: ObjectType;
    constructor(objectType) {
        this.objectType = objectType;
        // this.animationFrames = unit_config;
        // this.matrix = matrix;
        this.createFrames();
        // console.log('lemmy objecttype : ', objectType);
        
    };

    private createFrames() {
        // console.log(this.matrix);
        
        if (this.objectType === ObjectType.LiveUnit) {
            this.matrix = unitMatrix;
            this.animationFrames = unit_config;
        } else {
            this.matrix = objectMatrix;
            this.animationFrames = staticUnit_config;
        };
            for (let unit of Object.keys(this.matrix)) {
                // console.log('lemmy unit : ', unit);
                // console.log('lemmy animFr : ', this.animationFrames[unit]);
                
                
    
                for (let unitMode of Object.keys(this.matrix[unit].modes)) {
                    this.matrix[unit].modes[unitMode].frames.forEach((frame, index) => {
                        this.animationFrames[unit].modes[unitMode].frames.push(this.createFrame(index, unitMode, unit))
                    })
                };
                
            };
        
    };
    private createFrame(frameIndex, unitMode, unit) {
        const elements = [];
        this.matrix[unit].modes[unitMode].frames[frameIndex].slices.forEach((slice, sliceIndex) => {
            slice.split("").forEach((pixel, pixelIndex) => {
                if (pixel === "1") {
                    elements.push(this.createSlice(pixelIndex, sliceIndex));
                };
            });
        });

        return {
            "id": frameIndex,
            "elements": elements
        };
    };
    private createSlice(pixelIndex, sliceIndex) {
        return {
            "x": pixelIndex,
            "y": sliceIndex,
            "width": 1,
            "height": 1
        };
    };


};