import DebugConfig from "../DebugConfig";
import Level from "../models/Level";
import ConsoleUtil from "../utils/ConsoleUtil";
const print = ConsoleUtil.createLog('LevelFactory', '#58CAF8');
const printInitial = ConsoleUtil.createLog('LevelFactory', '#F2E517');



export default class LevelFactory {
    constructor() {
        DebugConfig.constructors_log && printInitial(`${this.constructor.name} constructed`);
    }

    public getLevel(id: number): Level {
        return new Level(id);
    };

};
