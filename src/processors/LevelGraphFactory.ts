import DebugConfig from "../DebugConfig";
import ConsoleUtil from "../utils/ConsoleUtil";
import GraphProcessor from "./GraphProcessor";
const printInitial = ConsoleUtil.createLog('LevelGraphFactory', '#F2E517');

export default class LevelGraphFactory {
    public levelGraph;
    constructor (level) {
        DebugConfig.constructors_log && printInitial(`${this.constructor.name} constructed`);
        this.levelGraph = new GraphProcessor(level).calculateGraph(level);
    };

};