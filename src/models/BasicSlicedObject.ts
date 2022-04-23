import { UnitMode } from '../data_types/enums/UnitModesEnums';
import { UnitType } from "../data_types/enums/UnitTypeEnums";
import { StaticObjectType } from "../data_types/enums/StaticObjectTypeEnums";
import GameModel from "./GameModel";
import DebugConfig from '../DebugConfig';
import { ILevelPoint } from '../data_types/contracts/ILevelPoint';
import ConsoleUtil from '../utils/ConsoleUtil';
import { ISize } from 'pixi.js';
const print = ConsoleUtil.createLog('BasicSlicedObject', '#CFF858');
const printInitial = ConsoleUtil.createLog('BasicSlicedObject', '#F2E517');

export default class BasicSlicedObject {
    
    private scaling: number = GameModel.configs.elementsScaling;
    
    private fullWidth = 10; //* How many pixels the unit width is
    public view;
    public frames: any = [];
    public position: ILevelPoint;
    protected size: ISize
    protected color: number;
    private unitType: UnitType | StaticObjectType;
    protected unitMode: UnitMode;




    constructor(
        position = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        color = 0xFFFFFF,
        unitType
        
    ) {
        DebugConfig.constructors_log && DebugConfig.single_unit_constructed && printInitial(`${this.constructor.name} constructed`);
        
        this.position = position;
        this.size = size;
        this.color = color;
        this.unitType = unitType;
        // this.view = this.frames[0];
    };

    

};