import * as PIXI from "pixi.js";
import DebugConfig from "./DebugConfig";
// import { objects } from './index';
import GameModel from "./models/GameModel";
import ConsoleUtil from "./utils/ConsoleUtil";
const print = ConsoleUtil.createLog('App', '#00d400');
const printInitial = ConsoleUtil.createLog('App', '#F2E517');


/**
 * Provides the main game loop. The constructor accepts height, width and background color.
 * Extends PIXI.Application.
 */
export default class App extends PIXI.Application {
    static instance: App;
    private static timeTt: number = 0;
    /**
     * Used to store operations that needs to be updated on every game cycle.
     */
    public static additionalLoopOperations: ((...args) => void)[] = [];
    // public dispatcher: PIXI.utils.EventEmitter;

    constructor(appConfig: any) {
        if (App.instance) {
            return App.instance;
        };
        
        super({ width: appConfig.width, height: appConfig.height, backgroundColor: appConfig.color });
        DebugConfig.constructors_log && printInitial(`${this.constructor.name} constructed`);

        App.instance = this;
        // this.dispatcher = new PIXI.utils.EventEmitter();

        App.instance.ticker.add((time) => {
            App.gameLoopFunction(time);
        });

    };

    /**
     * 
     * @param time All the lame logic should happen here. Functions and methods can be added to achieve update on every cycle
     */
    private static gameLoopFunction(time: number) {
        ++App.timeTt;
        if (App.timeTt % GameModel.configs.globalUpdateInterval === 0) {
            App.stageUpdate();
            this.executeAdditionalOperations();
        };
    };
    
    /**
     * Registers a function that will be executed on every update cycle
     * @param operation A callback function
     */
    public static registerOperation(operation: () => void) {
        this.additionalLoopOperations.push(operation);
    }

    /**
     * Executes all the operations stored in "additionalLoopOperations" array
     */
    private static executeAdditionalOperations() { //TODO Think about how to discard additional operation
        this.additionalLoopOperations.forEach(cb => {
            cb(); 
        });
    }
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