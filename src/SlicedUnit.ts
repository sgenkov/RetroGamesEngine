import { Graphics } from "pixi.js";
import unit_config from '../configs/unit-config.json';
import game_config from '../configs/game-config.json';
import BasicUnit from "./BasicUnit";
import App from "./app";

export default class SlicedUnit extends BasicUnit{
    public static unitsCreated: number = 0;
    private scaling: number = game_config.elementsScaling;
    private orientation: string;
    private baseUpdateInterval: number = 46; //TODO move to config
    private updateInterval: number;

    constructor(position = { x: 0, y: 0 }, size = { width: 0, height: 0 }, color = 0xFFFFFF, orientation = "right", baseUpdateInterval = 0) {
        super(position, size, color);
        this.baseUpdateInterval = baseUpdateInterval;
        this.updateInterval = this.baseUpdateInterval;
        this.orientation = orientation;
        BasicUnit.unitsCreated++;
        this.framesInit();
        this.view = this.frames[0];
        // this.view.x = this.position.x
        // console.log(this.view.x);
        
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
            graphic.x = this.position.x;
            graphic.y = this.position.y;
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