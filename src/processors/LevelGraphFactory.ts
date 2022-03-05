import DebugConfig from "../DebugConfig";
import GraphProcessor from "./GraphProcessor";
export default class LevelGraphFactory {
    public levelGraph;
    constructor (level) {
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
        this.levelGraph = new GraphProcessor(level).calculateGraph(level);
    };

};