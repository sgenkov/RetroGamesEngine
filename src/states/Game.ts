
import Utils from '../../src/utils/utils';
import LevelFactory from '../factories/LevelFactory';
import UnitFactory from '../factories/UnitFactory';
import BasicSlicedObject from '../models/BasicSlicedObject';
import Level from '../models/Level';
import State from './State';
// import { app } from '..';
import App from '../app';
import DebugConfig from '../DebugConfig';
export default class Game extends State {
    
    public currentLevel: Level;
    private currentLevelIndex: number = 1;
    private readonly unitFactory = new UnitFactory();
    private readonly levelFactory = new LevelFactory();

    constructor() {
        super();
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
        
        this.currentLevel = this.levelFactory.getLevel(this.currentLevelIndex)
    };
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

        App.instance.stage.removeChildren();
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