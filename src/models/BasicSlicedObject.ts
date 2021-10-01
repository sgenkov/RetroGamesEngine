import { Graphics } from "pixi.js";
import game_config from '../../configs/game-config.json';
import { UnitDirection } from "../enums/UnitDirectionsEnums";
import { UnitMode } from '../enums/UnitModesEnums';
import { visualObjectsProcessor } from "../index";
import { UnitType } from "../enums/UnitTypeEnums";
import { StaticObjectType } from "../enums/StaticObjectTypeEnums";
import { ObjectType } from "../enums/ObjectTypeEnums";

export default class BasicSlicedObject {
    private scaling: number = game_config.elementsScaling;
    
    private fullWidth = 10; //* How many pixels the unit width is
    public view;
    public frames: any = [];
    protected position: { x: number, y: number };
    protected size: { width: number, height: number };
    protected color: number;
    private unitType: UnitType | StaticObjectType;
    protected unitMode: UnitMode;




    constructor(
        position = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        color = 0xFFFFFF,
        unitType
        
    ) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.unitType = unitType;
        // this.frames = visualObjectsProcessor.framesInit(this);
        // this.view = this.frames[0];
    };

    

};