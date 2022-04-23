import { UnitMode } from "../data_types/enums/UnitModesEnums";
import DebugConfig from "../DebugConfig";
import VisualObjectsProcessor from "../processors/VisualObjectsProcessor";
import ConsoleUtil from "../utils/ConsoleUtil";
import BasicSlicedObject from "./BasicSlicedObject";
const print = ConsoleUtil.createLog('StaticUnit', '#CFF858');
const printInitial = ConsoleUtil.createLog('StaticUnit', '#F2E517');
export default class StaticUnit extends BasicSlicedObject {
    constructor(
        position = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        color = 0xFFFFFF,
        unitType?,
        unitMode = UnitMode.Default,

    ) {
        super(position, size, color, unitType);
        DebugConfig.constructors_log && DebugConfig.single_unit_constructed && printInitial(`${this.constructor.name} constructed`);
        
        this.unitMode = unitMode;
        this.frames = VisualObjectsProcessor.framesInit(this);
        this.view = this.frames[0];
        
    };

    public update() {
    };
};