import { AnimatedSprite } from "pixi.js";
import BasicUnit from "./BasicUnit";

export class BasicAnimatedUnit {
    public view;
    constructor() {
        this.view = this.createFrame();
    };

    createFrame() {
        const graphic = new BasicUnit();
        // const baseTexture = new PIXI.BaseTexture()
        // const texture1 = new PIXI.Texture()
        const sprite = new PIXI.Sprite()
        // console.log(graphic);
        
        let animatedGraphic = new AnimatedSprite(graphic.view )
    }
};