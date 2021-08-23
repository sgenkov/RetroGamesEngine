import { Graphics } from "pixi.js";
import unit_config from '../../configs/unit-config.json';
// import unit_config from '../../configs/unit-config-new.json';
import game_config from '../../configs/game-config.json';
import BasicUnit from "./BasicUnit";
import App from "../app";
import { UnitDirection } from "../enums/UnitDirectionsEnums";
import { UnitMode } from '../enums/UnitModesEnums';
import { UNIT_MODEL } from "../index";

export default class SlicedUnit extends BasicUnit {
    public static unitsCreated: number = 0;
    private scaling: number = game_config.elementsScaling;
    private direction: string;
    private baseUpdateInterval: number = 46; //TODO move to config
    private updateInterval: number;
    private fullWidth = 6;
    private unitMode: UnitMode;

    constructor(
        position = { x: 0, y: 0 },
        size = { width: 0, height: 0 },
        color = 0xFFFFFF,
        direction = UnitDirection.Right,
        baseUpdateInterval = 0,
        unitMode = UnitMode.Walking
    ) {

        super(position, size, color);
        // console.log(direction);
        this.baseUpdateInterval = baseUpdateInterval;
        this.updateInterval = this.baseUpdateInterval;
        this.direction = direction;
        this.unitMode = unitMode;
        BasicUnit.unitsCreated++;
        this.framesInit(unitMode);
        this.view = this.frames[0];
        // this.view.x = this.position.x
        // console.log(this.view.x);

    };
    framesInit(unitMode) {
        const tempRandColor: number = this.getRandomColor();
        UNIT_MODEL.animationFrames.player.modes.climbing.frames.forEach(frame => {
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