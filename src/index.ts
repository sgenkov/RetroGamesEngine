import * as PIXI from "pixi.js";
import App from "./app";
import * as game_config from '../configs/game-config.json'
import BasicUnit from "./BasicUnit";
import { BasicAnimatedUnit } from "./BasicAnimatedUnit";
import SlicedUnit from "./SlicedUnit";
// window.PIXI = PIXI; //* lemmy try without this row


export const objects: any = [];

// const graphic = new BasicUnit();
// const animatedGraphic = new BasicAnimatedUnit();
objects.push(new SlicedUnit({x: 40, y:40}, {width: 30, height: 30}, 0X000000));

// for (let i = 0; i < 800; i += 23) {
//     for(let j = 0; j < 600; j += 23) {
//         objects.push(new BasicUnit({x: 0 + i, y: 0 + j}, {width: 30, height: 30}, 0XFAAFFF))
//     };
// };

// app.stage.addChild(graphic.view)

const app = new App(game_config.appConfig);
document.body.appendChild(app.view);
objects.forEach((object) => app.stage.addChild(object.view));