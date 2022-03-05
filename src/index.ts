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
import Utils from "../src/utils/utils";
import Menu from "./states/Menu";
import Game from "./states/Game";
import * as Tone from 'tone'

window.PIXI = PIXI; //* lemmy try without this row

// export const visualObjectsProcessor = new VisualObjectsProcessor();
// export const testLevelFactory = new LevelFactory();
// const testUnitFactory = new UnitFactory();


// const lev1 = testLevelFactory.getLevel(1); // TODO unify this factory

// const testLevelGraph: any[] = new LevelGraphFactory(lev1).levelGraph;
export const app = new App(GameModel.configs.appConfig);

window.addEventListener("resize", () => { //todo take care of this later
    console.log('RESIZE');
    
});




// export const objects: any = [];
// const res = Utils.iterateOverLevel(lev1.world,
//     ({ rowSymbol }, acc) => {
//         if (rowSymbol.type === "P") { //* test 1
//             acc.push(rowSymbol)
//         }

//         const newObject = testUnitFactory.createUnit(rowSymbol);
//         objects.push(newObject);
//     },
//     true
// )


// // const a = new Menu()

// objects.forEach((object: BasicSlicedObject) => app.stage.addChild(object.view));
const game = new Game().enter();
document.body.appendChild(app.view);
//create a synth and connect it to the main output (your speakers)
// setTimeout(
//     () => {
//         Tone.start()
//         const synth = new Tone.Synth().toDestination();
        
//         //play a middle 'C' for the duration of an 8th note
//         // const time = new Tone.Unit
//         synth.triggerAttackRelease("C6", "8n");
        
//     }, 2000
// )
// // console.log("Performance : ", performance.now()); //todo check about this measure!
// document.addEventListener("keydown", (e) => {
//     console.log(e.key);

// });

// document.addEventListener("keyup", (e) => onKeyUp(e));
