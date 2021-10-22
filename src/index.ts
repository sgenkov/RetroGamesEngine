import * as PIXI from "pixi.js";
import App from "./app";
import BasicSlicedObject from "./models/BasicSlicedObject";
import { UnitDirection } from "./enums/UnitDirectionsEnums";
import { UnitMode } from "./enums/UnitModesEnums";
import UnitModel from "./models/UnitModel";
import { UnitType } from "./enums/UnitTypeEnums";
import VisualObjectsProcessor from "./processors/VisualObjectsProcessor";
import LiveUnit from "./models/LiveUnit";
import StaticUnit from "./models/StaticUnit";
import { StaticObjectType } from "./enums/StaticObjectTypeEnums";
import levels from "../resources/levels.json";
import LevelFactory from "./factories/LevelFactory";
import LevelProcessor from "./processors/LevelProcessor";
import UnitFactory from "./factories/UnitFactory";
import LevelGraph from "../resources/LevelGraph";
import GameModel from "./models/GameModel";


window.PIXI = PIXI; //* lemmy try without this row

export const visualObjectsProcessor = new VisualObjectsProcessor();
const testLevelFactory = new LevelFactory();
const testUnitFactory = new UnitFactory();

export const objects: any = [];

const testObjArray = [ 0, 0, 0, 0, 0, 0, 0, ];

testObjArray[0] && objects.push( //* Player
    new LiveUnit(
        { x: 40, y: 40 },
        { width: 130, height: 130 },
        0X000000,
        UnitDirection.Right,
        26,
        UnitMode.Walking,
        UnitType.Player
    ));
    
testObjArray[1] && objects.push( //* Enemy
    new LiveUnit(
        { x: 40, y: 390 },
        { width: 30, height: 30 },
        0X000000,
        UnitDirection.Left,
        20,
        UnitMode.Walking,
        UnitType.Enemy
    ));

testObjArray[2] && objects.push( //* Gold
    new StaticUnit(
        { x: 140, y: 390 },
        { width: 30, height: 30 },
        0X000000,
        StaticObjectType.Gold
    )
);

testObjArray[3] && objects.push( //* Dirt
    new StaticUnit(
        { x: 140, y: 390 },
        { width: 30, height: 30 },
        0X000000,
        StaticObjectType.Dirt
    )
);

testObjArray[4] && objects.push( //* Concrete
    new StaticUnit(
        { x: 140, y: 40 },
        { width: 30, height: 30 },
        0X000000,
        StaticObjectType.Concrete
    )
);

testObjArray[5] && objects.push( //* Ladder
    new StaticUnit(
        { x: 140, y: 40 },
        { width: 30, height: 30 },
        0X000000,
        StaticObjectType.Ladder
    )
);

testObjArray[6] && objects.push( //* Rod
    new StaticUnit(
        { x: 140, y: 40 },
        { width: 3, height: 30 },
        0X000000,
        StaticObjectType.Rod
    )
);


const lev1 = testLevelFactory.getLevel(1);

const testLevelGraph = new LevelGraph(lev1);
lev1.world.forEach((levelRow, rowIndex) => {
    levelRow.forEach((rowSymbol, symbolIndex) => {
       const newObject = testUnitFactory.createUnit(rowSymbol);
    //    newObject.position.y =2001
     newObject &&  objects.push(newObject)
    
        
    });
});

window.addEventListener("resize", () => { //todo take care of this later at all cost!!!
    console.log('RESIZE');
    
});

const app = new App(GameModel.configs.appConfig);
document.body.appendChild(app.view);
objects.forEach((object) => app.stage.addChild(object.view));