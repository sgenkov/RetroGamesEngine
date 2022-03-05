import { UnitMode } from "../data_types/enums/UnitModesEnums";
import DebugConfig from "../DebugConfig";
import VisualObjectsProcessor from "../processors/VisualObjectsProcessor";
import BasicSlicedObject from "./BasicSlicedObject";

export default class StaticUnit extends BasicSlicedObject {
    constructor(
        position = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        color = 0xFFFFFF,
        unitType?,
        unitMode = UnitMode.Default,

    ) {
        super(position, size, color, unitType);
        DebugConfig.constructors_log && DebugConfig.single_unit_constructed && console.log(`${this.constructor.name} constructed`);
        
        this.unitMode = unitMode;
        this.frames = VisualObjectsProcessor.framesInit(this);
        this.view = this.frames[0];
        
    };

    public update() {
    };
};