import * as PIXI from "pixi.js";
import DebugConfig from "./DebugConfig";
// import { objects } from './index';
import GameModel from "./models/GameModel";

export default class App extends PIXI.Application {
    static instance: App;
    private width: number;
    private height: number;
    private static timeTt: number = 0;
    // public dispatcher: PIXI.utils.EventEmitter;

    constructor(appConfig: any) {
        if (App.instance) {
            return App.instance;
        };
        
        super({ width: appConfig.width, height: appConfig.height, backgroundColor: appConfig.color });
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);

        App.instance = this;
        // this.dispatcher = new PIXI.utils.EventEmitter();

        App.instance.ticker.add((time) => {
            
            App.gameLoopFunction(time);
        });

    };

    private static gameLoopFunction(time: number) {
        ++App.timeTt;
        if (App.timeTt % GameModel.configs.globalUpdateInterval === 0) {
            App.stageUpdate();
        };
    };

    static stageUpdate() {
        
        // App.instance.stage.removeChildren();
        // objects.forEach(object => {
        //     object.update();
        //     App.instance.stage.addChild(object.view)
        // }
        // );

        // objects.forEach(object => {
        //     object.update(this);
        // }
        // );
    };

};