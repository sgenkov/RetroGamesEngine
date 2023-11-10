
import Utils from '../../src/utils/utils';
import LevelFactory from '../factories/LevelFactory';
import UnitFactory from '../factories/UnitFactory';
import BasicSlicedObject from '../models/BasicSlicedObject';
import Level from '../models/Level';
import State from './State';
// import { app } from '..';
import DebugConfig from '../DebugConfig';
import ConsoleUtil from '../utils/ConsoleUtil';
import LevelGraphFactory from '../processors/LevelGraphFactory';
import App from '../App';
const print = ConsoleUtil.createLog('Game', '#00BEBE');
const printInitial = ConsoleUtil.createLog('Game', '#F2E517');

/**
 * This is the play state of the game.It holds the current level.
 */
export default class Game extends State {
    
    public currentLevel: Level;
    private currentLevelIndex: number = 1;
    private unitFactory = null;
    private levelFactory = null;
    private graphFactory = null;
    private levelGraph: any[] = null;

    constructor() {
        super();
        DebugConfig.constructors_log && printInitial(`${this.constructor.name} constructed`);
        
        this.init();
    };
    private init() {
        this.levelFactory = new LevelFactory();
        this.unitFactory = new UnitFactory();
        this.currentLevel = this.levelFactory.getLevel(this.currentLevelIndex)
        this.graphFactory = new LevelGraphFactory(this.currentLevel);
        this.levelGraph = this.graphFactory.levelGraph;
        console.log("this.levelGraph : ", this.levelGraph);  
        
    }
    public enter() {
        this.processView();
        super.enter();
        //TODO Move the listeners somewhere 
        document.addEventListener("keydown", (e) => {//TODO next handle events for the controls
            DebugConfig.keyboard_listeners && console.log(e.key);
        });
        document.addEventListener("keyup", (e) => {
            // this.keysUp(e)
            DebugConfig.keyboard_listeners && console.log(e.key);
        });
        document.body.addEventListener("pointerdown", (e) => {
            // this.PLAYER.fire()
            DebugConfig.mouse_listeners && console.log(e.x, e.y);
            
        });

        // document.body.addEventListener("contextmenu", (e) => {
        //     e.preventDefault();
        // });
    };

    public tickUpdate() {
        // console.log('UPDATE FN');
        App.instance.stage.removeChildren(); // ? Obsolete?
        this.objects.forEach(object => {
            object.update();
            App.instance.stage.addChild(object.view)
        }
        );
    }
    processView(): void {
        Utils.iterateOverLevel(this.currentLevel.world,
            ({ rowSymbol }, acc) => {
                const newObject = this.unitFactory.createUnit(rowSymbol);
                this.objects.push(newObject);
            },
            false
        );
        this.objects.forEach((object: BasicSlicedObject) => this.view.addChild(object.view));
    }
};