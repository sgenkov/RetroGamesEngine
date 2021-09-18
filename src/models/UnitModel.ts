import unit_config from '../../configs/unit-config-new.json';
import matrix from '../rasterworks/unit-matrix.json';
export default class UnitModel {
    private matrix: any;
    public animationFrames: any;
    constructor() {
        this.animationFrames = unit_config;
        this.matrix = matrix;
        this.createFrames();
    };

    private createFrames() {
        console.log(this.matrix);
        for (let unit of Object.keys(this.matrix)) {

            for (let unitMode of Object.keys(this.matrix[unit].modes)) {
                this.matrix[unit].modes[unitMode].frames.forEach((frame, index) => {
                    this.animationFrames[unit].modes[unitMode].frames.push(this.createFrame(index, unitMode, unit))
                })
    
            }
            
        }
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