import unit_config from '../../configs/unit-config-new.json';
import staticUnit_config from '../../configs/staticUnit-config.json';
import { ObjectType } from '../data_types/enums/ObjectTypeEnums';
import unitMatrix from '../rasterworks/unit-matrix.json';
import objectMatrix from '../rasterworks/object-matrix.json';
import DebugConfig from '../DebugConfig';
export default class UnitModel {
    constructor() {
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
    };

    public static createFrames(objectType) {
        let matrix;
        let animationFrames
        
        if (objectType === ObjectType.LiveUnit) {
            matrix = unitMatrix;
            animationFrames = unit_config;
        } else {
            matrix = objectMatrix;
            animationFrames = staticUnit_config;
        };
            for (let unit of Object.keys(matrix)) {
                for (let unitMode of Object.keys(matrix[unit].modes)) {
                    matrix[unit].modes[unitMode].frames.forEach((frame, index) => {
                        animationFrames[unit].modes[unitMode].frames.push(this.createFrame(index, unitMode, unit, matrix))
                    })
                };
                
            };
        return animationFrames;
    };
    private static createFrame(frameIndex, unitMode, unit, matrix) {
        const elements = [];
        matrix[unit].modes[unitMode].frames[frameIndex].slices.forEach((slice, sliceIndex) => {
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
    private static createSlice(pixelIndex, sliceIndex) {
        return {
            "x": pixelIndex,
            "y": sliceIndex,
            "width": 1,
            "height": 1
        };
    };


};