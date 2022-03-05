import { UnitDirection } from "../data_types/enums/UnitDirectionsEnums";
import { UnitMode } from "../data_types/enums/UnitModesEnums";
import { UnitType } from "../data_types/enums/UnitTypeEnums";
import BasicSlicedObject from "./BasicSlicedObject";
import { ObjectType } from "../data_types/enums/ObjectTypeEnums";
import GameModel from "./GameModel";
import App from "../app";
import DebugConfig from "../DebugConfig";

export default class LiveUnit extends BasicSlicedObject {
    private direction: string;
    private baseUpdateInterval: number = 46; //TODO move to config
    private updateInterval: number;
    // private unitMode: UnitMode;
    private _currentFrameIndex: number = 0;
    private objectType: ObjectType = ObjectType.LiveUnit;
    public behaviors: any[] = [];

    public speed: { x: number, y: number} = { x:0, y:0 };
    constructor(
        position = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        color = 0xFFFFFF,
        direction = UnitDirection.Right,
        baseUpdateInterval = 0,
        unitMode = UnitMode.Walking,
        unitType = UnitType.Player
    ) {
        super(
            position,
            size,
            color = 0xFFFFFF,
            unitType,
            );
            DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
        
        this.baseUpdateInterval = baseUpdateInterval;
        this.updateInterval = this.baseUpdateInterval;
        this.direction = direction;
        this.unitMode = unitMode;
        // this.unitType = unitType;
        this.frames = this.visualObjectsProcessor.framesInit(this);
        this.view = this.frames[0];
        
    };
    
    public update() {
        this.updateInterval -= GameModel.configs.globalUpdateInterval;

        if (this.updateInterval <= 0) { //Todo Този метод на ъпдейт ми се струва крайно неоптимален
            this.updateInterval += this.baseUpdateInterval;
            App.instance.stage.removeChild(this.view);
            this.view = this.frames[this.nextFrameIndex];
            App.instance.stage.addChild(this.view);
        };
    };
    protected get nextFrameIndex(): number {
        ++this._currentFrameIndex;

        if (this._currentFrameIndex >= this.frames.length) {
            this._currentFrameIndex = 0;
        };

        return this._currentFrameIndex;
    };
};