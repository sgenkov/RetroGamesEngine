import DebugConfig from "../DebugConfig";

export class Behaviors {
    constructor() {
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
    }
    public static moveRight = (speed) => {
        // speed.x += 1;
        DebugConfig.keyboard_listeners && console.log('MOVE RIGHT FROM Behaviors.ts');
        
    };
    public static moveLeft = (speed) => {
        // speed.x += 1;
        DebugConfig.keyboard_listeners && console.log('MOVE LEFT Behaviors.ts');
        
    };
    public static moveUp = (speed) => {
        // speed.x += 1;
        DebugConfig.keyboard_listeners && console.log('MOVE UP Behaviors.ts');
        
    };
    public static moveDown = (speed) => {
        // speed.x += 1;
        DebugConfig.keyboard_listeners && console.log('MOVE DOWN Behaviors.ts');
        
    };
}