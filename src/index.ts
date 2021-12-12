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
import LevelGraphFactory from "./processors/LevelGraphFactory";
import GameModel from "./models/GameModel";
import GraphProcessor from "./processors/GraphProcessor";
import { iterateOverLevel } from "../src/utils/utils";

window.PIXI = PIXI; //* lemmy try without this row

export const visualObjectsProcessor = new VisualObjectsProcessor();
export const testLevelFactory = new LevelFactory();
const testUnitFactory = new UnitFactory();

export const objects: any = [];

const lev1 = testLevelFactory.getLevel(1); // TODO unify this factory

const testLevelGraph: any[] = new LevelGraphFactory(lev1).levelGraph;
// console.log(testLevelGraph);

lev1.world.forEach((levelRow, rowIndex) => {
    levelRow.forEach((rowSymbol, symbolIndex) => {
        const newObject = testUnitFactory.createUnit(rowSymbol);
        //    newObject.position.y =2001
        //  newObject &&  objects.push(newObject)
        if (newObject && rowIndex === 0 && symbolIndex === 0) {
            if (rowIndex === 0 && symbolIndex === 0) {
                //  console.log(newObject);
            };

        }
        objects.push(newObject);
    });
});

window.addEventListener("resize", () => { //todo take care of this later at all cost!!!
    console.log('RESIZE');

});

const app = new App(GameModel.configs.appConfig);
document.body.appendChild(app.view);
objects.forEach((object) => app.stage.addChild(object.view));

// const d = []
// const  res = iterateOverLevel([["a", "b", "c"], ["d", "e", "f"]],
//     ({element}) => {
//         console.log(element);
//         if (element === "f") {
//             d.push(element)
//         }
//     },
//     d
// )
// console.log(res);

const d = []
const  res = iterateOverLevel(lev1.world,
    ({element}) => {
        console.log(element);
        if (element.type === "P") {
            d.push(element)
        }
    },
    d
)
console.log(res)


