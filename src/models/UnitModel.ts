import unit_config from '../../configs/unit-config-new.json';
import matrix from '../rasterworks/matrix.json';
export default class UnitModel {
    private matrix: any;
    public animationFrames: any;
    constructor() {
        this.animationFrames = unit_config;
        this.matrix = matrix;
        // console.log('lemmy frames: ', this.animationFrames);
        // console.log('lemmy matrix: ', this.matrix);
        this.createFrames();

    };

    private createFrames() {
        for (let unitMode of Object.keys(this.matrix.player.modes)) {
            // console.log(this.matrix.player.modes[unitMode].frames);
            this.matrix.player.modes[unitMode].frames.forEach((frame, index) => {
                // console.log(this.animationFrames.player.modes[unitMode]);

                this.animationFrames.player.modes[unitMode].frames.push(this.createFrame(index, unitMode))
                // console.log(frame);

            })

        }
    }
    private createFrame(frameIndex, unitMode) {
        const elements = [];
        this.matrix.player.modes[unitMode].frames[frameIndex].slices.forEach((slice, sliceIndex) => {
            slice.split("").forEach((pixel, pixelIndex) => {
                if (pixel === "1") {
                    elements.push({
                        "x": pixelIndex,
                        "y": sliceIndex,
                        "width": 1,
                        "height": 1
                    })
                };
            });
        });
        
        return {
            "id": frameIndex,
            "elements": elements
        };
    }
    private createSlice() {
        // console.log('Slice created');

        return { "x": 3, "y": 4, "width": 2, "height": 1 };
    }


};