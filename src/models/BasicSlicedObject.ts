import { UnitMode } from '../data_types/enums/UnitModesEnums';
import { UnitType } from "../data_types/enums/UnitTypeEnums";
import { StaticObjectType } from "../data_types/enums/StaticObjectTypeEnums";
import GameModel from "./GameModel";
import VisualObjectsProcessor from '../processors/VisualObjectsProcessor';
import DebugConfig from '../DebugConfig';

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
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
        
        this.position = position;
        this.size = size;
        this.color = color;
        this.unitType = unitType;
        // this.frames = visualObjectsProcessor.framesInit(this);
        // this.view = this.frames[0];
    };

    

};