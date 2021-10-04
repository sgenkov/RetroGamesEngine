import { visualObjectsProcessor } from "..";
import { ObjectType } from "../enums/ObjectTypeEnums";
import { UnitMode } from "../enums/UnitModesEnums";
import BasicSlicedObject from "./BasicSlicedObject";

export default class StaticUnit extends BasicSlicedObject {
    private objectType: ObjectType = ObjectType.StaticUnit;
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
        // console.log('frames static : ', this.frames);
        
    };

    public update(app: any) {
    };
};