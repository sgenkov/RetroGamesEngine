import { Graphics } from 'pixi.js';
import unit_config from '../configs/unit-config.json';
export default class BasicUnit {
    public static unitsCreated: number = 0;

    public view;
    public frames: any = [];
    private _currentFrameIndex: number = 0;
    private startPosition: {x: number, y: number};
    private color: number;
    constructor(position = {x: 0, y: 0}, size = {width: 0, height: 0}, color = 0xFFFFFF) {
        BasicUnit.unitsCreated ++;
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
        unit_config.player.frames.forEach(frame => {
            this.frames.push(this.createFrame(
                frame.id, 
                {
                    x: frame.position.x + this.startPosition.x, 
                    y: frame.position.y + this.startPosition.y
                }, 
                frame.size,
                tempRandColor
                ));
        });
    };
    createFrame = (id, position, size, color?) => {

        let graphic = new Graphics();
        graphic["id"] = id;
        graphic.beginFill(color);
        graphic.drawRect(position.x, position.y, size.width, size.height);
        graphic.endFill();
        // graphic.tint = 0xFF2700
        // console.log("element created");
        return graphic;
    };

    public update() {
        // console.log('UPDATE');
        
        this.view = this.frames[this.nextFrameIndex];
        // console.log(this.view.id);
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
        return Math.floor(Math.random()*16777215);
    }
}