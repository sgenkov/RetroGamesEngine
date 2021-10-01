import { UnitDirection } from "../enums/UnitDirectionsEnums";
import { UnitMode } from "../enums/UnitModesEnums";
import { UnitType } from "../enums/UnitTypeEnums";
import BasicSlicedObject from "./BasicSlicedObject";
import game_config from '../../configs/game-config.json';
import { visualObjectsProcessor } from "..";
import { StaticObjectType } from "../enums/StaticObjectTypeEnums";
import { ObjectType } from "../enums/ObjectTypeEnums";

export default class LiveUnit extends BasicSlicedObject {
    private direction: string;
    private baseUpdateInterval: number = 46; //TODO move to config
    private updateInterval: number;
    // private unitMode: UnitMode;
    private _currentFrameIndex: number = 0;
    private objectType: ObjectType = ObjectType.LiveUnit;
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
        this.baseUpdateInterval = baseUpdateInterval;
        this.updateInterval = this.baseUpdateInterval;
        this.direction = direction;
        this.unitMode = unitMode;
        // this.unitType = unitType;
        this.frames = visualObjectsProcessor.framesInit(this);
        this.view = this.frames[0];
        // console.log('frames live : ', this.frames);
        
    };
    
    public update(app: any) {
        this.updateInterval -= game_config.globalUpdateInterval;

        if (this.updateInterval <= 0) { //Todo Този метод на ъпдейт ми се струва крайно неоптимален
            this.updateInterval += this.baseUpdateInterval;
            app.instance.stage.removeChild(this.view);
            this.view = this.frames[this.nextFrameIndex];
            app.instance.stage.addChild(this.view);
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