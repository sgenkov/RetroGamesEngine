import DebugConfig from "../DebugConfig";
import Level from "../models/Level";

export default class LevelFactory {
    constructor() {
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
    }

    public getLevel(id: number): Level {
        return new Level(id);
    };

};
