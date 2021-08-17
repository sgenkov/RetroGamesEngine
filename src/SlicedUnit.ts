import { Graphics } from "pixi.js";
import unit_config from '../configs/unit-config.json';
import game_config from '../configs/game-config.json';
import BasicUnit from "./BasicUnit";

export default class SlicedUnit {
    public static unitsCreated: number = 0;

    public view;
    public frames: any = [];
    private _currentFrameIndex: number = 0;
    private startPosition: { x: number, y: number };
    private color: number;
    private scaling: number = game_config.elementsScaling;

    constructor(position = { x: 0, y: 0 }, size = { width: 0, height: 0 }, color = 0xFFFFFF) {
        BasicUnit.unitsCreated++;
        this.startPosition = position;
        this.color = color;
        // console.log('Unit created : ', BasicUnit.unitsCreated);

        // this.view = this.createFrame(position, size, color);
        this.framesInit();
        this.view = this.frames[0];
        // console.log(unit_config);

    };
    framesInit() {
        const tempRandColor: number = this.getRandomColor();
        unit_config.player1.frames.forEach(frame => {
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
        })
        // graphic.tint = 0xFF2700
        // console.log("element created");
        return graphic;
    };

    public update() {
        this.view = this.frames[this.nextFrameIndex];
    };
    private get nextFrameIndex(): number {
        ++this._currentFrameIndex;
        if (this._currentFrameIndex < this.frames.length) {
            return this._currentFrameIndex;
        } else {
            this._currentFrameIndex = 0;
            return this._currentFrameIndex;
        };
    };

    private getRandomColor(): number {
        return Math.floor(Math.random() * 16777215);
    }

};