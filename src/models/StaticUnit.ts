import { visualObjectsProcessor } from "..";
import { ObjectType } from "../enums/ObjectTypeEnums";
import { UnitMode } from "../enums/UnitModesEnums";
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
        this.unitMode = unitMode;
        this.frames = visualObjectsProcessor.framesInit(this);
        this.view = this.frames[0];
        
    };

    public update(app: any) {
    };
};