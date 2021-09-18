import { Graphics } from "pixi.js";
import game_config from '../../configs/game-config.json';
import { UnitDirection } from "../enums/UnitDirectionsEnums";
import { UnitMode } from '../enums/UnitModesEnums';
import { visualObjectsProcessor } from "../index";
import { UnitType } from "../enums/UnitTypeEnums";

export default class BasicSlicedObject {
    private scaling: number = game_config.elementsScaling;
    private direction: string;
    private baseUpdateInterval: number = 46; //TODO move to config
    private updateInterval: number;
    private fullWidth = 10; //* How many pixels the unit width is
    private unitMode: UnitMode;
    private unitType: UnitType;
    private _currentFrameIndex: number = 0;
    public view;
    public frames: any = [];
    protected position: { x: number, y: number };
    protected size: { width: number, height: number };
    protected color: number;


    constructor(
        position = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        color = 0xFFFFFF,
        direction = UnitDirection.Right,
        baseUpdateInterval = 0,
        unitMode = UnitMode.Walking,
        unitType = UnitType.Player
    ) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.baseUpdateInterval = baseUpdateInterval;
        this.updateInterval = this.baseUpdateInterval;
        this.direction = direction;
        this.unitMode = unitMode;
        this.unitType = unitType;
        this.frames = visualObjectsProcessor.framesInit(this);
        this.view = this.frames[0];
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