import * as PIXI from "pixi.js";
import App from "./app";
import * as game_config from '../configs/game-config.json'
import BasicSlicedObject from "./models/BasicSlicedObject";
import { UnitDirection } from "./enums/UnitDirectionsEnums";
import { UnitMode } from "./enums/UnitModesEnums";
import UnitModel from "./models/UnitModel";
import { UnitType } from "./enums/UnitTypeEnums";
import VisualObjectsProcessor from "./processors/VisualObjectsProcessor";
import LiveUnit from "./models/LiveUnit";
import StaticUnit from "./models/StaticUnit";
import { StaticObjectType } from "./enums/StaticObjectTypeEnums";


window.PIXI = PIXI; //* lemmy try without this row

export const visualObjectsProcessor = new VisualObjectsProcessor();

export const objects: any = [];

1 && objects.push( //* Player
    new LiveUnit(
        { x: 40, y: 40 },
        { width: 130, height: 130 },
        0X000000,
        UnitDirection.Right,
        26,
        UnitMode.Walking,
        UnitType.Player
    ));
// objects.push(new BasicSlicedObject({x: 340, y: 40}, {width: 30, height: 30}, 0X000000, UnitDirection.Left, 12, UnitMode.Falling));
// objects.push(new BasicSlicedObject({x: 620, y: 40}, {width: 30, height: 30}, 0X000000, UnitDirection.Right, 20, UnitMode.Rappelling));
1 && objects.push( //* Enemy
    new LiveUnit(
        { x: 40, y: 390 }, 
        { width: 30, height: 30 }, 
        0X000000, 
        UnitDirection.Left, 
        20, 
        UnitMode.Walking,
        UnitType.Enemy
        ));

0 && objects.push( //* Gold
    new StaticUnit(
        { x: 140, y: 390 }, 
        { width: 30, height: 30 }, 
        0X000000, 
        StaticObjectType.Gold
        )
);

1 && objects.push( //* Dirt
    new StaticUnit(
        { x: 140, y: 390 }, 
        { width: 30, height: 30 }, 
        0X000000, 
        StaticObjectType.Dirt
        )
);

0 && objects.push( //* Concrete
    new StaticUnit(
        { x: 140, y: 40 }, 
        { width: 30, height: 30 }, 
        0X000000, 
        StaticObjectType.Concrete
        )
);

0 && objects.push( //* Ladder
    new StaticUnit(
        { x: 140, y: 40 }, 
        { width: 30, height: 30 }, 
        0X000000, 
        StaticObjectType.Ladder
        )
);

1 && objects.push( //* Rod
    new StaticUnit(
        { x: 140, y: 40 }, 
        { width: 30, height: 30 }, 
        0X000000, 
        StaticObjectType.Rod
        )
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