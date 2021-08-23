import { Graphics } from 'pixi.js';
import unit_config from '../../configs/unit-config.json';
import App from '../app';
export default class BasicUnit {
    public static unitsCreated: number = 0;

    public view;
    public frames: any = [];
    private _currentFrameIndex: number = 0;
    protected position: { x: number, y: number };
    protected size: { width: number, height: number };
    protected color: number;
    constructor(position = { x: 0, y: 0 }, size = { width: 0, height: 0 }, color = 0xFFFFFF) {
        // BasicUnit.unitsCreated ++;
        this.position = position;
        this.size = size;
        this.color = color;
    };

    framesInit(unitMode) {
        const tempRandColor: number = this.getRandomColor();
        unit_config.player.frames.forEach(frame => {
            this.frames.push(this.createFrame(
                frame.id, 
                {
                    x: frame.position.x + this.position.x, 
                    y: frame.position.y + this.position.y
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

    public update(app: any) {
        // console.log('UPDATE');
        
        this.view = this.frames[this.nextFrameIndex];
        // console.log(this.view.id);
    };

    protected get nextFrameIndex(): number {
        ++this._currentFrameIndex;
        if (this._currentFrameIndex < this.frames.length) {
            return this._currentFrameIndex;
        } else {
            this._currentFrameIndex = 0;
            return this._currentFrameIndex;
        };
    };

    protected getRandomColor(): number {
        return Math.floor(Math.random()*16777215);
    }
}