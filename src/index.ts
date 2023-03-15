import * as PIXI from "pixi.js";
import App from "./App";
import GameModel from "./models/GameModel";
import Game from "./states/Game";
import * as Tone from 'tone'
import ConsoleUtil from "./utils/ConsoleUtil";
import LevelGraphFactory from "./processors/LevelGraphFactory";
import LevelFactory from "./factories/LevelFactory";

const print = ConsoleUtil.createLog('Index', '#00d400');



window.PIXI = PIXI; //* lemmy try without this row

// export const testLevelFactory = new LevelFactory();
// const testUnitFactory = new UnitFactory();


// const lev1 = testLevelFactory.getLevel(1); // TODO unify this factory

// const testLevelGraph: any[] = new LevelGraphFactory(lev1).levelGraph;
// console.log("testLevelGraph : ", testLevelGraph); 

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
