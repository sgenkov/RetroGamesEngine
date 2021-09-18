import { Graphics } from "pixi.js";
import game_config from '../../configs/game-config.json';
import BasicUnit from "./BasicUnit";
import App from "../app";
import { UnitDirection } from "../enums/UnitDirectionsEnums";
import { UnitMode } from '../enums/UnitModesEnums';
import { UNIT_MODEL } from "../index";
import { UnitType } from "../enums/UnitTypeEnums";

export default class SlicedUnit extends BasicUnit {
    public static unitsCreated: number = 0;
    private scaling: number = game_config.elementsScaling;
    private direction: string;
    private baseUpdateInterval: number = 46; //TODO move to config
    private updateInterval: number;
    private fullWidth = 6;
    private unitMode: UnitMode;
    private unitType: UnitType;

    constructor(
        position = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        color = 0xFFFFFF,
        direction = UnitDirection.Right,
        baseUpdateInterval = 0,
        unitMode = UnitMode.Walking,
        unitType = UnitType.Player
    ) {

        super(position, size, color);
        // console.log(UNIT_MODEL);
        this.baseUpdateInterval = baseUpdateInterval;
        this.updateInterval = this.baseUpdateInterval;
        this.direction = direction;
        this.unitMode = unitMode;
        this.unitType = unitType;

        BasicUnit.unitsCreated++;
        this.framesInit();
        this.view = this.frames[0];
        // this.view.x = this.position.x
        // console.log(this.view.x);

    };
    framesInit() {
        const tempRandColor: number = this.getRandomColor();
        // console.log(UNIT_MODEL.animationFrames[this.unitType].modes[this.unitMode].frames);
        
        UNIT_MODEL.animationFrames[this.unitType].modes[this.unitMode].frames.forEach(frame => {
            this.frames.push(this.createFrame(
                frame.id,
                frame.elements,
                tempRandColor
            ));
        });
    };
    createFrame = (id, elements, color?) => {

        let graphic = new Graphics();
        graphic["id"] = id;
        elements.forEach(element => {
            graphic.beginFill(color);
            graphic.drawRect(
                element.x * this.scaling,
                element.y * this.scaling,
                element.width * this.scaling,
                element.height * this.scaling
            );
            graphic.endFill();
            graphic.x = this.direction === UnitDirection.Right
                ? 0
                : this.fullWidth * this.scaling;
            graphic.x += this.position.x;

            graphic.y = this.position.y;
            graphic.scale.x = this.direction === UnitDirection.Left ? -1 : 1;
        })
        // graphic.tint = 0xFF2700
        // console.log("element created");
        return graphic;
    };

    public update(app: any) {
        this.updateInterval -= game_config.globalUpdateInterval;
        // console.log(this.updateInterval);

        if (this.updateInterval <= 0) {
            this.updateInterval += this.baseUpdateInterval;
            app.instance.stage.removeChild(this.view);
            this.view = this.frames[this.nextFrameIndex];
            app.instance.stage.addChild(this.view);
        };
    };

};