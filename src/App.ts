import * as PIXI from "pixi.js";
import { objects } from './index';
import game_config from '../configs/game-config.json';

export default class App extends PIXI.Application {
    static instance: App;
    private width: number;
    private height: number;
    private static timeTt: number = 0;

    constructor(appConfig: any) {
        // if (App.instance) {
        //     return App.instance;
        // };

        super({ width: appConfig.width, height: appConfig.height, backgroundColor: appConfig.color });

        App.instance = this;

        App.instance.ticker.add((time) => {
            App.gameLoopFunction(time);
        });

    };

    private static gameLoopFunction(time: number) {
        ++App.timeTt;
        if (App.timeTt % game_config.globalUpdateInterval === 0) {
            App.stageUpdate()
        }
    };

    static stageUpdate() {
        App.instance.stage.removeChildren();
            objects.forEach(object => {
                object.update();
                App.instance.stage.addChild(object.view)
            }
            );
        
    };

};