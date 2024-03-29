import { IState } from "../data_types/contracts/IState";
import App from "../App";
import DebugConfig from "../DebugConfig";
import ConsoleUtil from "../utils/ConsoleUtil";
const printState = ConsoleUtil.createLog('State', '#00BEBE');

export default class State implements IState {
    public objects: any[];
    public view: PIXI.Container;
    protected ticker: PIXI.Ticker;

    constructor() {
        DebugConfig.constructors_log && printState(`"${this.constructor.name}" constructed`);
        this.view = new PIXI.Container;
        this.objects = [];
        this.ticker = new PIXI.Ticker;
    }
    public enter() {
        App.instance.stage.addChild(this.view)
        // setTimeout(() => { //* For testing the exit()
        //     console.log('CL');

        //     this.exit()
        // }, 3000);
        this.ticker.add(() => { this.tickUpdate() })
        this.ticker.start();
    }
    public clearStage() {
        // console.log('CLEAR STAGE');
        this.ticker.destroy();
        
        App.instance.stage.removeChildren(); //TODO In future must specify which elements to remove
    }

    public tickUpdate() {
        
    }
    processView() {
        
    }
    public exit() {
        this.clearStage();
    }
}