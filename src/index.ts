import * as PIXI from "pixi.js";
import App from "./app";
import * as game_config from '../configs/game-config.json'
import SlicedUnit from "./models/SlicedUnit";
import { UnitDirection } from "./enums/UnitDirectionsEnums";
import { UnitMode } from "./enums/UnitModesEnums";
import UnitModel from "./models/UnitModel";
import { UnitType } from "./enums/UnitTypeEnums";


window.PIXI = PIXI; //* lemmy try without this row

export const UNIT_MODEL = new UnitModel();
export const objects: any = [];

1 && objects.push(
    new SlicedUnit(
        { x: 40, y: 40 },
        { width: 130, height: 130 },
        0X000000,
        UnitDirection.Right,
        26,
        UnitMode.Rappelling,
        UnitType.Player
    ));
// objects.push(new SlicedUnit({x: 340, y: 40}, {width: 30, height: 30}, 0X000000, UnitDirection.Left, 12, UnitMode.Falling));
// objects.push(new SlicedUnit({x: 620, y: 40}, {width: 30, height: 30}, 0X000000, UnitDirection.Right, 20, UnitMode.Rappelling));
0 && objects.push(
    new SlicedUnit(
        { x: 40, y: 390 }, 
        { width: 30, height: 30 }, 
        0X000000, 
        UnitDirection.Right, 
        20, 
        UnitMode.Walking,
        UnitType.Enemy
        ));

1 && objects.push(
    
);




// for (let i = 0; i < 800; i += 23) {
//     for(let j = 0; j < 600; j += 23) {
//         objects.push(new BasicUnit({x: 0 + i, y: 0 + j}, {width: 30, height: 30}, 0XFAAFFF))
//     };
// };

// app.stage.addChild(graphic.view)

const app = new App(game_config.appConfig);
document.body.appendChild(app.view);
objects.forEach((object) => app.stage.addChild(object.view));