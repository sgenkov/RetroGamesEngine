import { UnitMode } from '../enums/UnitModesEnums';
import { UnitType } from "../enums/UnitTypeEnums";
import { StaticObjectType } from "../enums/StaticObjectTypeEnums";
import GameModel from "./GameModel";
import VisualObjectsProcessor from '../processors/VisualObjectsProcessor';

export default class BasicSlicedObject {
    
    protected visualObjectsProcessor = new VisualObjectsProcessor();
    private scaling: number = GameModel.configs.elementsScaling;
    
    private fullWidth = 10; //* How many pixels the unit width is
    public view;
    public frames: any = [];
    public position: { x: number, y: number };
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